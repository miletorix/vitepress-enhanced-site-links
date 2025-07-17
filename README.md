# vitepress-enhanced-links

Vue components for enhanced link cards in VitePress and other Vue 3 apps.

## Installation

```bash
npm install vitepress-enhanced-links
```

## Usage

```ts
// index.ts or enhanceApp
import Card from 'vitepress-enhanced-links/Card.vue'
import CardsGroup from 'vitepress-enhanced-links/CardsGroup.vue'

app.component('Card', Card)
app.component('CardsGroup', CardsGroup)
```