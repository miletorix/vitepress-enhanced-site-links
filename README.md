# vitepress-enhanced-site-links

Vue components for enhanced link cards in VitePress.

<p align="center">
  <img src="./assets/demo.png" alt="vitepress-enhanced-site-links demo" width="800">
</p>

## Live Demo and more information

✨ See it in action:  
👉 [https://miletorix.github.io/vitepress-enhanced-site-links/](https://miletorix.github.io/vitepress-enhanced-site-links/)

📦 NPM Package:  
👉 [https://www.npmjs.com/package/@miletorix/vitepress-enhanced-site-links](https://www.npmjs.com/package/@miletorix/vitepress-enhanced-site-links)

## Installation

```sh
npm i @miletorix/vitepress-enhanced-site-links
```

## Usage

### Configuration

```typescript
// docs/.vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import { Card, CardsGroup } from '@miletorix/vitepress-enhanced-site-links' // [!code ++]
import '@miletorix/vitepress-enhanced-site-links/style.css' // [!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('Card', Card) // [!code ++]
    ctx.app.component('CardsGroup', CardsGroup) // [!code ++]
  }
}
```

### Single Link Card
```vue
<Card
  title="title..."
  link="https://url.../" 
  desc="desc..."
  logo="path-to-img"
/>
```

### Multiple Link Cards
```vue
<CardsGroup :cards="[
  { title: 'title...', link: 'https://url.../', desc: 'desc...' },
  { title: 'title...', link: 'https://url.../', desc: 'desc...' },
  { title: 'title...', link: 'https://url.../', desc: 'desc...', logo: 'path-to-url' }
]" />
```

## Examples

### Example 1

**Input**

```vue
<Card title="Github" link="https://github.com/" />
```

**Output**

![demo-2](./assets/demo-2.png)

### Example 2

**Input**

```vue
<Card title="Github" link="https://github.com/" desc="Github Homepage" />
```

**Output**

![demo-3](./assets/demo-3.png)

### Example 3

**Input**

```vue
<Card
  title="YouTube"
  link="https://youtube.com/" 
  desc="YouTube Homepage"
  logo="/img/youtube-logo-1.png"
/>
```

**Output**

![demo-4](./assets/demo-4.png)

### Example 4

**Input**

```vue
<CardsGroup :cards="[
  { title: 'YouTube', link: 'https://youtube.com/', desc: '' },
  { title: 'Github', link: 'https://github.com/', desc: 'Github Homepage' },
  { 
    title: 'Notepad', 
    link: 'https://apps.microsoft.com/detail/9msmlrh6lzf3?hl=en-US&gl=US', 
    desc: 'MS Store',
    logo: '/img/notepad-logo.png' 
  }
]" />  
```

**Output**

![demo-5](./assets/demo-5.png) 
