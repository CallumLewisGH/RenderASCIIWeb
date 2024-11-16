var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { defineStore } from 'pinia';
export const useASCIStore = defineStore('ASCIStore', {
    state: () => ({
        imageFile: null,
        greyscaledImage: null,
        ASCIArray: null,
        percentageCompletion: null,
        fileURL: null,
        contrast: 1.0,
        compression: 1.0,
    }),
    getters: {
        hasASCIArray: (state) => !!state.ASCIArray,
    },
    actions: {
        setImage(file) {
            return __awaiter(this, void 0, void 0, function* () {
                this.imageFile = file;
                this.fileURL = URL.createObjectURL(file);
                this.ASCIArray = null;
                this.percentageCompletion = 0;
                this.compression = 1.0;
                this.contrast = 1.0;
                this.greyscaledImage = null;
                this.greyscaleEffect();
            });
        },
        clear() {
            this.ASCIArray = null;
            this.percentageCompletion = null;
        },
        characterDecide(gsValue) {
            if (gsValue < 35)
                return "#";
            else if (gsValue < 45)
                return "@";
            else if (gsValue < 55)
                return "%";
            else if (gsValue < 65)
                return "&";
            else if (gsValue < 80)
                return "$";
            else if (gsValue < 100)
                return "*";
            else if (gsValue < 115)
                return "+";
            else if (gsValue < 125)
                return "=";
            else if (gsValue < 140)
                return "~";
            else if (gsValue < 155)
                return "-";
            else if (gsValue < 165)
                return ";";
            else if (gsValue < 175)
                return "!";
            else if (gsValue < 185)
                return "?";
            else if (gsValue < 200)
                return ":";
            else if (gsValue < 215)
                return ".";
            else if (gsValue < 225)
                return ",";
            else if (gsValue < 235)
                return "'";
            else if (gsValue < 247)
                return "\"";
            else
                return " ";
        },
        stringGenerator(characterArray) {
            return characterArray.map(row => row.join("")).join("\n");
        },
        greyscaleEffect() {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.imageFile != null) {
                    this.compression = this.compression || 2; // Image downscaling factor
                    this.contrast = this.contrast || 1.2; // Contrast adjustment factor
                    const image = yield createImageBitmap(this.imageFile);
                    const width = Math.floor(image.width / this.compression);
                    const height = Math.floor(image.height / this.compression);
                    const canvas = document.createElement("canvas");
                    canvas.width = width;
                    canvas.height = height;
                    const context = canvas.getContext("2d");
                    context.drawImage(image, 0, 0, width, height);
                    const resizedImageData = context.getImageData(0, 0, width, height);
                    for (let y = 0; y < height; y++) {
                        for (let x = 0; x < width; x++) {
                            const index = (y * width + x) * 4;
                            // Convert to grayscale using weighted average
                            const r = resizedImageData.data[index];
                            const g = resizedImageData.data[index + 1];
                            const b = resizedImageData.data[index + 2];
                            let gsValue = Math.floor(0.299 * r + 0.587 * g + 0.114 * b);
                            // Apply Node.js contrast adjustment formula
                            gsValue = Math.floor((125 - gsValue) * this.contrast + 125);
                            // Clamp grayscale value between 0 and 255
                            gsValue = Math.min(Math.max(gsValue, 0), 255);
                            // Set the grayscale value for all color channels
                            resizedImageData.data[index] = gsValue;
                            resizedImageData.data[index + 1] = gsValue;
                            resizedImageData.data[index + 2] = gsValue;
                        }
                    }
                    context.putImageData(resizedImageData, 0, 0);
                    this.greyscaledImage = canvas.toDataURL(); // Store the processed image
                }
            });
        },
        generateASCIIArt() {
            return __awaiter(this, void 0, void 0, function* () {
                const input = this.greyscaledImage || new HTMLCanvasElement();
                let image;
                if (typeof input === 'string') {
                    image = yield this.loadImageFromDataURL(input);
                }
                else {
                    image = yield this.loadImageFromCanvas(input);
                }
                const canvas = document.createElement("canvas");
                canvas.width = image.width;
                canvas.height = image.height;
                const context = canvas.getContext("2d");
                context.drawImage(image, 0, 0, image.width, image.height);
                const resizedImageData = context.getImageData(0, 0, image.width, image.height);
                const pixelsChar = Array.from({ length: image.height }, () => Array(image.width).fill(" "));
                for (let y = 0; y < image.height; y++) {
                    for (let x = 0; x < image.width; x++) {
                        const index = (y * image.width + x) * 4;
                        const grayscale = resizedImageData.data[index]; // Use the grayscale value
                        const character = this.characterDecide(grayscale); // Map to ASCII character
                        pixelsChar[y][x] = character + " ";
                    }
                }
                this.ASCIArray = this.stringGenerator(pixelsChar);
            });
        },
        loadImageFromDataURL(dataURL) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = dataURL;
            });
        },
        loadImageFromCanvas(canvas) {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = canvas.toDataURL();
                img.onload = () => resolve(img);
            });
        }
    }
});
