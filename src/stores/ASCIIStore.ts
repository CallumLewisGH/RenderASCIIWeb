import { defineStore } from 'pinia';

interface ASCIState {
  imageFile: File | null;
  greyscaledImage: string | null | undefined;
  ASCIArray: string | null;
  loading: Boolean | null;
  contrast: number | null;
  compression: number | null;
  fileURL: string | null;
  isinverted: boolean;
}

export const useASCIStore = defineStore('ASCIStore', {
  state: (): ASCIState => ({
    imageFile: null,
    greyscaledImage: null,
    ASCIArray: null,
    loading: false,
    fileURL: null,
    contrast: 1.0,
    compression: 1.0,
    isinverted: false,
  }),

  getters: {
    hasASCIArray: (state): boolean => !!state.ASCIArray,
  },

  actions: {
    async setImage(file : File){
      this.imageFile = file;
      this.fileURL = URL.createObjectURL(file);
      this.ASCIArray = null;
      this.loading = false;
      this.compression = 1.0;
      this.contrast = 1.0;
      this.greyscaledImage = null;
      this.greyscaleEffect();
      this.isinverted = false;


    },

    clear() {
        this.ASCIArray = null;
        this.loading = null;
    },

    invert () {
      this.isinverted = !this.isinverted;
      this.greyscaleEffect();
    },

    characterDecide(gsValue: number) {
      if (gsValue < 35) return "#";
      else if (gsValue < 45) return "@";
      else if (gsValue < 55) return "%";
      else if (gsValue < 65) return "&";
      else if (gsValue < 80) return "$";
      else if (gsValue < 100) return "*";
      else if (gsValue < 115) return "+";
      else if (gsValue < 125) return "=";
      else if (gsValue < 140) return "~";
      else if (gsValue < 155) return "-";
      else if (gsValue < 165) return ";";
      else if (gsValue < 175) return "!";
      else if (gsValue < 185) return "?";
      else if (gsValue < 200) return ":";
      else if (gsValue < 215) return ".";
      else if (gsValue < 225) return ",";
      else if (gsValue < 235) return "'";
      else if (gsValue < 247) return "\"";
      else return " ";
    },

  stringGenerator(characterArray: string[][]) {
    this.loading = false;
    return characterArray.map(row => row.join("")).join("\n");
  },

  async greyscaleEffect() {
    this.loading = true;
    if (this.imageFile != null) {
      this.compression = this.compression || 2; // Image downscaling factor
      this.contrast = this.contrast || 1.2;    // Contrast adjustment factor

      const image: ImageBitmap = await createImageBitmap(this.imageFile);

      const width = Math.floor(image.width / this.compression);
      const height = Math.floor(image.height / this.compression);

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");

      context!.drawImage(image, 0, 0, width, height);

      const resizedImageData = context!.getImageData(0, 0, width, height);

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const index = (y * width + x) * 4;

          // Convert to grayscale using weighted average
          const r = resizedImageData.data[index];
          const g = resizedImageData.data[index + 1];
          const b = resizedImageData.data[index + 2];
          let gsValue = Math.floor(0.299 * r + 0.587 * g + 0.114 * b);

          // Apply Node.js contrast adjustment formula
          if (this.isinverted == false) {
            gsValue = Math.floor((gsValue - 128) * this.contrast + 128);
          }

          else {
            gsValue = Math.floor((128 - gsValue) * this.contrast + 128);
          }

          // Clamp grayscale value between 0 and 255
          gsValue = Math.min(Math.max(gsValue, 0), 255);

          // Set the grayscale value for all color channels
          resizedImageData.data[index] = gsValue;
          resizedImageData.data[index + 1] = gsValue;
          resizedImageData.data[index + 2] = gsValue;
        }
      }

      context!.putImageData(resizedImageData, 0, 0);

      this.greyscaledImage = canvas.toDataURL(); // Store the processed image
      this.loading = false;
    }
  },

  async generateASCIIArt() {
    this.loading = true;
    const input = this.greyscaledImage || new HTMLCanvasElement();
    let image: HTMLImageElement;

    if (typeof input === 'string') {
      image = await this.loadImageFromDataURL(input);
    }

    else {
      image = await this.loadImageFromCanvas(input);
    }

    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");

    context!.drawImage(image, 0, 0, image.width, image.height);

    const resizedImageData = context!.getImageData(0, 0, image.width, image.height);

    const pixelsChar: string[][] = Array.from({ length: image.height }, () => Array(image.width).fill(" "));

    for (let y = 0; y < image.height; y++) {
      for (let x = 0; x < image.width; x++) {
        const index = (y * image.width + x) * 4;
        const grayscale = resizedImageData.data[index]; // Use the grayscale value
        const character = this.characterDecide(grayscale); // Map to ASCII character
        pixelsChar[y][x] = character + " ";
      }
    }

    this.ASCIArray = this.stringGenerator(pixelsChar);
  },

  loadImageFromDataURL(dataURL: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = dataURL;
    });
  },

  loadImageFromCanvas(canvas: HTMLCanvasElement): Promise<HTMLImageElement> {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = canvas.toDataURL();
      img.onload = () => resolve(img);
    });
  }


}});
