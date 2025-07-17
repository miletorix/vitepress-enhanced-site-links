# vitepress-enhanced-site-links

Vue components for enhanced link cards in VitePress.


[GitHub Page](https://github.com/miletorix/vitepress-enhanced-site-links).

## Installation

```sh
npm i @miletorix/vitepress-enhanced-site-links
```

## Usage

### Configuration

```typescript
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

### Single link card
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