import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

// Wordpress2016.overrideThemeStyles = () => {
//   return {
//     "a.gatsby-resp-image-link": {
//       boxShadow: `none`,
//     },
//   }
// }

// delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// const typography = new Typography({
//   baseFontSize: "18px",
//   baseLineHeight: 1.45,
//   headerFontFamily: ["Playfair Display", "serif"],
//   bodyFontFamily: ["Roboto", "sans-serif"]
// });

// import lawtonTheme from 'typography-theme-lawton'

// const typography = new Typography(lawtonTheme)

// import githubTheme from 'typography-theme-github'

// const typography = new Typography(githubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
