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

![npm](https://img.shields.io/npm/v/@miletorix/vitepress-enhanced-site-links) ![npm](https://img.shields.io/npm/dw/@miletorix/vitepress-enhanced-site-links) ![license](https://img.shields.io/npm/l/@miletorix/vitepress-enhanced-site-links)

<p align="center">
  <img src="/demo.png" alt="vitepress-enhanced-site-links demo" width="800">
</p>

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
```vue [example.md]
<Card
  title="title..."
  link="https://url.../" 
  desc="desc..."
  logo="path-to-img"
/>
```

::: tip
If description is empty, the URL will be shown
:::

::: warning 🚧 Attention
When interacting with some sites, it is necessary to specify the logo (favicon) icon **manually**, because there is a problem with loading.

**Cases have been observed**:
- Sharing links with **OneDrive**
:::

### Multiple Link Cards

```vue [example.md]
<CardsGroup :cards="[
  { title: 'title...', link: 'https://url.../', desc: 'desc...' },
  { title: 'title...', link: 'https://url.../', desc: 'desc...' },
  { title: 'title...', link: 'https://url.../', desc: 'desc...', logo: 'path-to-url' }
]" />
```

## Examples

### Example 1

**Input**
```vue [example.md]
<Card title="Github" link="https://github.com/" />
```

**Output**

<Card title="Github" link="https://github.com/" />

### Example 2

**Input**
```vue [example.md]
<Card title="Github" link="https://github.com/" desc="Github Homepage" />
```

**Output**

<Card title="Github" link="https://github.com/" desc="Github Homepage" />

### Example 3

**Input**
```vue [example.md]
<Card
  title="YouTube"
  link="https://youtube.com/" 
  desc="YouTube Homepage"
  logo="/img/youtube-logo-1.png"
/>
```

**Output**

<Card
  title="YouTube"
  link="https://youtube.com/" 
  desc="YouTube Homepage"
  logo="youtube-logo-1.png"
/>

### Example 4

**Input**

```vue [example.md]
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
    logo: 'notepad-logo.png' 
    }
]" /> 
