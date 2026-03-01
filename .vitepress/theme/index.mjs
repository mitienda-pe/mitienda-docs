// .vitepress/theme/index.mjs
// Extiende el tema por defecto de VitePress
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,
  // Aquí puedes registrar componentes Vue globales si los necesitas
  // enhanceApp({ app }) {
  //   app.component('MiComponente', MiComponente)
  // }
}
