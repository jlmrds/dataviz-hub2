// See https://tailwindcss.com/docs/configuration for details 
module.exports = {
  important: '#website',  //Make tailwind have highest specificity over other styling plugin (e.g. styled components)
  purge: {
    content: [
      './src/**/*.jsx',
      './content/blog/**/*.mdx'
    ]
  },
  theme: {
    extend: {
      screens: {
        'ipadp': '1030px',
        'xl': '1281px',
        '2xl': '1441px',
      },
      backgroundColor: {
        'footer': '#414042',
        'highlight': '#1cbfff',
        'highlight_2': '#00aeef',
        'light_grey': '#f1f1f1',
        'light_black': 'rgba(0,0,0, .6)',
        'black-45': 'rgba(0, 0, 0, .45)',
        'black-85': 'rgba(0, 0, 0, .85)'
      },
      borderColor: {
        'highlight_2': '#00aeef',
        'menu_red': '#ff5e5e',
        'menu_yellow': '#f3f218',
        'menu_green': '#99f318',
        'black': '#000',
      },
      borderWidth: {
        '1': '1px',
        '3': '3px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '15': '15px',
        '7vh': '7vh',

      },
      boxShadow: {
        'c1': '0px 12px 15px 0px #C8C4C1',
        'c2': '0px 12.3px 15.37px 0px #3A3631',
      },
      fontSize: {
        'xxs': '.65rem',
        'med': '.94rem',
      },
      height: {
        '30px': '30px',
        '40px': '40px',
        '50px': '50px',
      },
      margin: {
        '14': '3.5rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '28': '7rem',
        '36': '9rem',
        '38': '9.5rem',
        '40': '10rem',
        '44': '11rem',
        '52': '13rem',
        '60': '15rem',
        '68': '17rem',
        '70': '17.5rem',
        '72': '18rem',
        '74': '18.5rem',
        '78': '19.5rem',
        '10vh': '10vh',
        '15vh': '15vh',
        '18vh': '18vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '50vh': '50vh',
        '55vh': '55vh',
        '60vh': '60vh',
        '65vh': '65vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '95vh': '95vh',
        '100vh': '100vh',
      },
      maxHeight: {
        '15': '15vh',
        '18': '18vh',
        '20': '20vh',
        '25': '25vh',
        '30': '30vh',
        '40': '40vh',
        '50': '50vh',
        '55': '55vh',
        '60': '60vh',
        '70': '70vh',
        '80': '80vh',
        '90': '90vh',
        '95': '95vh',
        '100': '100vh',
        '0': '0',
        '1/4': '25%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
        '3/4': '75%',
        'full': '100%',
      },
      maxWidth: {
        '0': '0',
        '10': '10vw',
        '15': '15vw',
        '25': '25vw',
        '27': '27vw',
        '30': '30vw',
        '40': '40vw',
        '50': '50vw',
        '55': '55vw',
        '60': '60vw',
        '70': '70vw',
        '80': '80vw',
      },
      minHeight: {
        '15': '15vh',
        '18': '18vh',
        '20': '20vh',
        '25': '25vh',
        '30': '30vh',
        '40': '40vh',
        '50': '50vh',
        '55': '55vh',
        '60': '60vh',
        '70': '70vh',
        '80': '80vh',
        '90': '90vh',
        '95': '95vh',
        '100': '100vh',
        '110': '110vh',
        '120': '120vh',
        '1/4': '25%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
        '3/4': '75%',
        'full': '100%',
      },
      minWidth: {
        '0': '0',
        '10': '10vw',
        '20': '20vw',
        '30': '30vw',
        '40': '40vw',
        '50': '50vw',
        '60': '60vw',
        '80': '80vw',
        '90': '90vw',
        '95': '95vw',
        '100': '100vw',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '5/12': '41.6666666%',
        'full': '100%',
      },
      padding: {
        '14': '3.5rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '28': '7rem',
        '36': '9rem',
        '38': '9.5rem',
        '40': '10rem',
        '44': '11rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '68': '17rem',
        '70': '17.5rem',
        '72': '18rem',
        '74': '18.5rem',
        '78': '19.5rem',
        '10vh': '10vh',
        '15vh': '15vh',
        '18vh': '18vh',
        '20vh': '20vh',
        '22vh': '22vh',
        '25vh': '25vh',
        '30vh': '30vh',
        '35vh': '35vh',
        '40vh': '40vh',
        '45vh': '45vh',
        '50vh': '50vh',
        '55vh': '55vh',
        '60vh': '60vh',
        '65vh': '65vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '95vh': '95vh',
        '100vh': '100vh',
      },
      textColor: {
        'highlight': '#337ab7',
        'highlight_2': '#00aeef',
        'highlight_2t': '#73d8ff',
        'logo_blue': '#009fe3',
      },
      transitionProperty: {
        'hover': 'hover, group-hover',
        'opacity': 'opacity',
        'display': 'display'
      },
      width: {
        '30px': '30px',
        '40px': '40px',
        '50px': '50px',
      },

    },
 
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'first', 'last', 'odd', 'even'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'first', 'last', 'odd', 'even'],
    borderColor: ['responsive', 'hover', 'group-hover', 'first', 'last', 'odd', 'even'],
    borderWidth: ['responsive', 'hover', 'group-hover', 'first', 'last', 'odd', 'even'],
    fontWeight: ['group-hover', 'first', 'last', 'odd', 'even'],
    fontSize: ['responsive', 'hover', 'focus','group-hover', 'first', 'last', 'odd', 'even'],
    display: ['responsive', 'hover', 'focus', 'group-hover', 'first', 'last', 'odd', 'even'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover', 'first', 'last', 'odd', 'even'],
    zIndex: ['responsive', 'hover', 'focus', 'group-hover', 'first', 'last', 'odd', 'even'],
    scale: ['responsive',  'focus', 'active', 'hover', 'group-hover', 'first', 'last', 'odd', 'even'],
    transitionDuration: ['responsive', 'hover', 'focus', 'group-hover', 'first', 'last', 'odd', 'even'],
    transitionProperty: ['responsive', 'hover', 'focus', 'group-hover', 'first', 'last', 'odd', 'even'],
    transitionTimingFunction: ['responsive', 'hover', 'focus', 'group-hover', 'first', 'last', 'odd', 'even'],
    minHeight: ['responsive', 'hover', 'focus', 'group-hover', 'first', 'last', 'odd', 'even'],
    maxHeight: ['responsive', 'hover', 'focus', 'group-hover', 'first', 'last', 'odd', 'even'],
    greyScale: ['responsive', 'hover', 'focus', 'group-hover', 'first', 'last', 'odd', 'even'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'first', 'last', 'odd', 'even'],
  },
  plugins: [require("@tailwindcss/custom-forms")],
}
