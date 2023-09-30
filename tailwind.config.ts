import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes:{
        slowup:{
          "0%":{transform:'translateY(10px)'},
          "100%":{transform:'translateY(0px)'}
        }
      },

      animation:{
        slowup:'slowup .5s ease-out'
      }
    },
  },
  plugins: [],
}
export default config
