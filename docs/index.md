---
prev: false
next: false
title: Home
layout: doc
outline: [2, 3]
sidebar: false
---

# vitepress-enhanced-site-links

Vue components for enhanced link cards in VitePress.

## Installation

```sh [npm]
npm i @miletorix/vitepress-enhanced-site-links
```

## Usage

### Configuration

```typescript  [docs/.vitepress/theme/index.ts]
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
::: tip
If description is empty, the URL will be shown
:::

### Multiple Link Cards
```vue
<CardsGroup :cards="[
  { title: 'Notepad++', link: 'https://notepad-plus-plus.org/', desc: 'Homepage' },
  { title: 'VS Code', link: 'https://code.visualstudio.com/', desc: 'Homepage' },
  { title: 'Sublime Text', link: 'https://www.sublimetext.com/' }
]" />
```

## Examples

### Example 1

**Input**
```vue
<Card title="Github" link="https://github.com/" desc="" />
```

**Output**
<Card title="Github" link="https://github.com/" desc="" />

### Example 2

**Input**
```vue
<Card title="Github" link="https://github.com/" desc="Github Homepage" />
```

**Output**
<Card title="Github" link="https://github.com/" desc="Github Homepage" />

### Example 3

**Input**
```vue
<Card
  title="YouTube"
  link="https://youtube.com/" 
  desc="YouTube Homepage"
  logo="/img/youtube-logo-1.png" //custom logo
/>
```

**Output**
<Card
  title="YouTube"
  link="https://youtube.com/" 
  desc="YouTube Homepage"
  logo="/img/youtube-logo-1.png"
/>

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