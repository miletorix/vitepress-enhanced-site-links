/// <reference types="C:/Users/user1/Desktop/vitepress-enhanced-site-links/packages/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="C:/Users/user1/Desktop/vitepress-enhanced-site-links/packages/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import Card from './Card.vue';
const props = defineProps();
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "cards-group" },
});
/** @type {__VLS_StyleScopedClasses['cards-group']} */ ;
for (const [card] of __VLS_vFor((__VLS_ctx.cards))) {
    const __VLS_0 = Card;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        ...(card),
        key: (card.title),
    }));
    const __VLS_2 = __VLS_1({
        ...(card),
        key: (card.title),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore
    [cards,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
