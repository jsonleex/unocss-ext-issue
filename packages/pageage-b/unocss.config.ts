import { defineConfig, presetMini } from 'unocss'
import { theme } from 'unocss/preset-mini'

export default defineConfig({
  presets: [presetMini()],
  theme: {
    colors: {
      red: theme.colors.blue
    }
  }
})
