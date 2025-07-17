import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import { Card, CardsGroup } from '@miletorix/vitepress-enhanced-site-links'
import '@miletorix/vitepress-enhanced-site-links/style.css'

import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('Card', Card)
    ctx.app.component('CardsGroup', CardsGroup)
  }
}