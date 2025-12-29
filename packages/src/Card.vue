<script setup lang="ts">
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

const cardLink = computed(() => props.link || '#')

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
        <span class="link-card-arrow" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
          >
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              vector-effect="non-scaling-stroke"
            />
          </svg>
        </span>
    </div>
  </a>
</template>

<style scoped>
.link-card {
  display: block;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1em;
  margin-top: 24px;
  margin-bottom: 1em;
  text-decoration: none;
  border: 3px solid transparent;
  transition: all 0.3s ease;
  color: inherit;
}

.link-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}


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
  position: relative;
  display: inline-block;
  background-image: linear-gradient(currentColor, currentColor);
  background-size: 0% 1.5px;
  background-repeat: no-repeat;
  background-position: 0 100%;
  transition: background-size 0.25s ease;
}

.link-card:hover .link-card-title {
  background-size: 100% 1.5px;
}


.link-card-desc {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.link-card-arrow {
  margin-left: auto;
  display: flex;
  align-items: center;
  opacity: 0.35;
  transform: translateX(0);
  transition: opacity 0.25s ease, transform 0.25s ease, color 0.25s ease;
  color: var(--vp-c-text-2);
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.link-card:hover .link-card-arrow {
  opacity: 1;
  transform: translateX(4px);
  color: var(--vp-c-brand-1);
}

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
