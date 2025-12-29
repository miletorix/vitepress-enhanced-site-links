/// <reference types="C:/Users/user1/Desktop/vitepress-enhanced-site-links/packages/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="C:/Users/user1/Desktop/vitepress-enhanced-site-links/packages/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { computed } from 'vue';
const props = withDefaults(defineProps(), {
    desc: '',
    logo: '',
    link: '',
    color: '',
    cover: ''
});
const isExternal = computed(() => /^https?:\/\//.test(props.link));
const cardLink = computed(() => props.link || '#');
const cardLogo = computed(() => {
    if (props.logo)
        return props.logo;
    // fallback: favicon by domain
    if (props.link && isExternal.value)
        return `https://s2.googleusercontent.com/s2/favicons?domain_url=${props.link}&sz=96`;
    return '/favicon.png';
});
const descText = computed(() => props.desc || props.link || '');
const __VLS_defaults = {
    desc: '',
    logo: '',
    link: '',
    color: '',
    cover: ''
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['link-card']} */ ;
/** @type {__VLS_StyleScopedClasses['link-card']} */ ;
/** @type {__VLS_StyleScopedClasses['link-card-title']} */ ;
/** @type {__VLS_StyleScopedClasses['link-card']} */ ;
/** @type {__VLS_StyleScopedClasses['link-card-arrow']} */ ;
/** @type {__VLS_StyleScopedClasses['link-card-title']} */ ;
/** @type {__VLS_StyleScopedClasses['link-card-desc']} */ ;
/** @type {__VLS_StyleScopedClasses['link-card']} */ ;
/** @type {__VLS_StyleScopedClasses['link-card-logo']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "link-card" },
    href: (__VLS_ctx.cardLink),
    target: (__VLS_ctx.isExternal ? '_blank' : '_self'),
    rel: "noopener noreferrer",
});
/** @type {__VLS_StyleScopedClasses['link-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "link-card-content" },
});
/** @type {__VLS_StyleScopedClasses['link-card-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "link-card-logo" },
    src: (__VLS_ctx.cardLogo),
    alt: "icon",
});
/** @type {__VLS_StyleScopedClasses['link-card-logo']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "link-card-text" },
});
/** @type {__VLS_StyleScopedClasses['link-card-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "link-card-title" },
});
/** @type {__VLS_StyleScopedClasses['link-card-title']} */ ;
(__VLS_ctx.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "link-card-desc" },
});
/** @type {__VLS_StyleScopedClasses['link-card-desc']} */ ;
(__VLS_ctx.descText);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "link-card-arrow" },
    'aria-hidden': "true",
});
/** @type {__VLS_StyleScopedClasses['link-card-arrow']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.path)({
    d: "M7 17L17 7M17 7H9M17 7V15",
    fill: "none",
    stroke: "currentColor",
    'stroke-width': "1.5",
    'stroke-linecap': "round",
    'stroke-linejoin': "round",
    'vector-effect': "non-scaling-stroke",
});
// @ts-ignore
[cardLink, isExternal, cardLogo, title, descText,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
