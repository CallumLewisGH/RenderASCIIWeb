import { useASCIStore } from '@/stores/ASCIIStore';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Access the ASCIStore from Pinia
const ASCIIStore = useASCIStore();
// Method to update greyscale effect manually
const updateGreyscaleEffect = () => {
    ASCIIStore.greyscaleEffect();
};
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
    if (__VLS_ctx.ASCIIStore.greyscaledImage) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("Centraliser") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("ImageActions") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign({ src: ((__VLS_ctx.ASCIIStore.greyscaledImage)), alt: ("Greyscale effect") }, { style: ({}) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("Slider") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(Object.assign({ for: ("default-range") }, { class: ("block mb-2 text-sm font-medium text-gray-900 dark:text-white") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)(Object.assign(Object.assign(Object.assign({ onChange: (__VLS_ctx.updateGreyscaleEffect) }, { id: ("default-range"), type: ("range"), value: ("1") }), { class: ("w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700") }), { min: ("0"), max: ("3"), step: ("0.02") }));
        (__VLS_ctx.ASCIIStore.contrast);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("Slider") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(Object.assign({ for: ("default-range") }, { class: ("block mb-2 text-sm font-medium text-gray-900 dark:text-white") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)(Object.assign(Object.assign(Object.assign({ onChange: (__VLS_ctx.updateGreyscaleEffect) }, { id: ("default-range"), type: ("range"), value: ("4") }), { class: ("w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700") }), { min: ("1"), max: ("16"), step: ("0.02") }));
        (__VLS_ctx.ASCIIStore.compression);
    }
    __VLS_styleScopedClasses['Centraliser'];
    __VLS_styleScopedClasses['ImageActions'];
    __VLS_styleScopedClasses['Slider'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-900'];
    __VLS_styleScopedClasses['dark:text-white'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-2'];
    __VLS_styleScopedClasses['bg-gray-200'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['appearance-none'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['dark:bg-gray-700'];
    __VLS_styleScopedClasses['Slider'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-900'];
    __VLS_styleScopedClasses['dark:text-white'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-2'];
    __VLS_styleScopedClasses['bg-gray-200'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['appearance-none'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['dark:bg-gray-700'];
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
            ASCIIStore: ASCIIStore,
            updateGreyscaleEffect: updateGreyscaleEffect,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
