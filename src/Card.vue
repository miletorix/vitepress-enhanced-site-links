<script setup lang="ts">
import { withBase } from 'vitepress'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  title: string
  desc?: string
  logo?: string
  link?: string
  color?: string
  cover?: string
}>(), {
  desc: '',
  logo: '',
  link: '',
  color: '',
  cover: ''
})

const isExternal = computed(() =>
  /^https?:\/\//.test(props.link)
)

const cardLink = computed(() =>
  isExternal.value ? props.link : withBase(props.link)
)

const cardLogo = computed(() => {
  if (props.logo)
    return props.logo

  // fallback: favicon by domain
  if (props.link && isExternal.value)
    return `https://s2.googleusercontent.com/s2/favicons?domain_url=${props.link}&sz=96`

  return '/favicon.png'
})

const descText = computed(() => props.desc || props.link || '')
</script>

<template>
  <a
    class="link-card"
    :href="cardLink"
    :target="isExternal ? '_blank' : '_self'"
    rel="noopener noreferrer"
  >
    <div class="link-card-content">
      <img class="link-card-logo" :src="cardLogo" alt="icon" />
      <div class="link-card-text">
        <div class="link-card-title">{{ title }}</div>
        <div class="link-card-desc">{{ descText }}</div>
      </div>
    </div>
  </a>
</template>

<style scoped>
.link-card {
  display: block;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1em;
  margin-bottom: 1em;
  text-decoration: none;
  border: 3px solid transparent;
  transition: border-color 0.2s ease;
  color: inherit;
}

.link-card:hover {
  border-color: var(--vp-c-brand-1);
}

/* .link-card:hover {
  background-color: var(--vp-c-brand-soft); 
  border-color: var(--vp-c-brand-1);
} */

.link-card-content {
  display: flex;
  align-items: center;
  gap: 1em;
}

.link-card-logo {
  width: 3em;
  height: 3em;
  border-radius: 0.5em;
  object-fit: contain;
  flex-shrink: 0;
}

.link-card-text {
  flex: 1;
  min-width: 0;
}

.link-card-title {
  font-weight: 600;
  font-size: 1em;
  margin-bottom: 0.2em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.link-card-desc {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* Mobile adjustments */
@media (max-width: 600px) {
  .link-card-title {
    font-size: 0.95em;
  }

  .link-card-desc {
    font-size: 0.85em;
    max-width: 90%;
  }

  .link-card {
    padding: 0.75em;
  }

  .link-card-logo {
    width: 2.5em;
    height: 2.5em;
  }
}
</style>
