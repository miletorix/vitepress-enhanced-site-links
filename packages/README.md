# vitepress-enhanced-site-links

Vue components for enhanced link cards in VitePress.

## Live Demo

See it in action:  
👉 [https://miletorix.github.io/vitepress-enhanced-site-links/](https://miletorix.github.io/vitepress-enhanced-site-links/)

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
  title="Github"
  link="https://github.com/" 
  desc="Github Homepage"
  logo="/img/logo-github.png"
/>
```

### Multiple Link Cards
```vue
<CardsGroup :cards="[
  { title: 'Notepad++', link: 'https://notepad-plus-plus.org/', desc: 'Homepage' },
  { title: 'VS Code', link: 'https://code.visualstudio.com/', desc: 'Homepage' },
  { title: 'Sublime Text', link: 'https://www.sublimetext.com/' }
]" />
```