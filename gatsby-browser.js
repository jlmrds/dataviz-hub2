/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "tailwindcss/dist/base.css"
import 'gitalk/dist/gitalk.css'
import "./src/css/index.css"
import "./src/css/style.scss"
import "./src/css/post.scss"
import "./src/css/animation.scss"
import "./src/css/gitalk.scss"
import "./src/css/accordion.scss"


export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

// Disable default scroll-to-top
// export const shouldUpdateScroll = () => {
//   return false;
// };

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Dataviz.Shef has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
};

require("./src/css/prism-custom.scss")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")

export const onRouteUpdate = (window) => {
  if (window.location.hash) {
    // fix for id starting with numbers
    const hash = window.location.hash.replace(/^#(\d)/, '#\\3$1');
    
    setTimeout(() => {
      document.querySelector(`${hash}`).scrollIntoView()
    }, 700);

  }
}