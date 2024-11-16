var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useASCIStore } from '@/stores/ASCIIStore';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const ASCIStore = useASCIStore();
const onFileChanged = (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        ASCIStore.setImage(file);
    }
});
const downloadFile = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    yield ASCIStore.generateASCIIArt();
    const name = ((_a = ASCIStore.imageFile) === null || _a === void 0 ? void 0 : _a.name.trim()) || 'default_file_name';
    const blob = new Blob([ASCIStore.ASCIArray || ""], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${name}.txt`;
    link.click();
    URL.revokeObjectURL(url);
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = Object.assign(Object.assign(Object.assign({}, {}), {}), __VLS_ctx);
    let __VLS_components;
    const __VLS_localDirectives = Object.assign(Object.assign({}, {}), __VLS_ctx);
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("FileActions") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("flex items-center justify-center w-full") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(Object.assign({ for: ("dropzone-file") }, { class: ("flex flex-col items-center justify-center w-full h-full border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-800 bg-gray-700 border-gray-600 hover:border-gray-500") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("flex flex-col items-center justify-center pt-5 pb-6") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)(Object.assign({ class: ("w-8 h-8 mb-4 text-gray-500 dark:text-gray-400") }, { "aria-hidden": ("true"), xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 20 16") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ stroke: ("currentColor"), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), "stroke-width": ("2"), d: ("M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: ("mb-2 text-sm text-gray-500 dark:text-gray-400") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("font-semibold") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: ("text-xs text-gray-500 dark:text-gray-400") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(Object.assign(Object.assign({ onChange: (...[$event]) => {
            __VLS_ctx.onFileChanged($event);
        } }, { id: ("dropzone-file"), type: ("file") }), { class: ("hidden") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("flex items-center justify-center w-full") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(Object.assign({ class: ("flex flex-col items-center justify-center w-full h-full border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-800 bg-gray-700 border-gray-600 hover:border-gray-500") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("flex flex-col items-center justify-center pt-5 pb-6") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)(Object.assign({ class: ("w-8 h-8 mb-4 text-gray-500 dark:text-gray-400") }, { "aria-hidden": ("true"), xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 20 20") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ stroke: ("currentColor"), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), "stroke-width": ("2"), d: ("M10 3v9m0 0L8 10m2 2 2-2M4 17v-2m0 2h12m0-2v2"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: ("mb-2 text-sm text-gray-500 dark:text-gray-400") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("font-semibold") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: ("text-xs text-gray-500 dark:text-gray-400") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign({ onClick: (__VLS_ctx.downloadFile) }));
    __VLS_styleScopedClasses['FileActions'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['border-dashed'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['hover:bg-gray-800'];
    __VLS_styleScopedClasses['bg-gray-700'];
    __VLS_styleScopedClasses['border-gray-600'];
    __VLS_styleScopedClasses['hover:border-gray-500'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['pt-5'];
    __VLS_styleScopedClasses['pb-6'];
    __VLS_styleScopedClasses['w-8'];
    __VLS_styleScopedClasses['h-8'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['dark:text-gray-400'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['dark:text-gray-400'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['dark:text-gray-400'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['border-dashed'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['hover:bg-gray-800'];
    __VLS_styleScopedClasses['bg-gray-700'];
    __VLS_styleScopedClasses['border-gray-600'];
    __VLS_styleScopedClasses['hover:border-gray-500'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['pt-5'];
    __VLS_styleScopedClasses['pb-6'];
    __VLS_styleScopedClasses['w-8'];
    __VLS_styleScopedClasses['h-8'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['dark:text-gray-400'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['dark:text-gray-400'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['dark:text-gray-400'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            onFileChanged: onFileChanged,
            downloadFile: downloadFile,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
