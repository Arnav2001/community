/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height:{
        '32.79':'2.0494%',
        '82':'5.125rem',
        '44.09':'2.7556rem',
        '40':'2.5rem',
        '43.71':'2.7319rem',
        '339':'21.1875rem',
        '133':'8.3125rem',
        '191':'11.875rem',
        '95':'5.9375rem',
        '104':'6.5rem',
        '276':'17.25rem',
        '132':'8.25rem',
        '63':'3.9375rem',
        '45':'2.8125rem',
        '123':'7.6875rem',
        '271':'16.9375rem',
        '55':'3.4375rem',
        '65':'4.0625rem',
        '177':'11.0625rem',
        '120':'7.5rem',
        '41':'2.5625rem',
        '25':'1.5625rem',
        '34':'2.125rem'
      },
      width:{
        '181':'11.3125%',
        '230':'14.375rem',
        '38.72':'2.42rem',
        '40':'2.5rem',
        '43.71':'2.7319rem',
        '339':'21.1875rem',
        '133':'8.3125rem',
        '302':'18.875rem',
        '150':'9.375rem',
        '83':'5.1875rem',
        '220':'13.75rem',
        '356':'22.25rem',
        '169':'10.5625rem',
        '133':'8.3125rem',
        '361':'22.5625rem',
        '132':'8.25rem',
        '48':'3rem',
        '95':'5.9375rem',
        '265':'16.5625rem',
        '190':'11.875rem',
        '66':'4.125rem',
        '124':'7.75rem',
        '25':'1.5625rem',
        '34':'2.125rem'
      },
      fontSize:{
        '110':'6.875rem',
        '30':'1.875rem',
        '32':'2rem',
        '28':'1.75rem',
        '18':'1.125rem',
        '24':'1.5rem',
        '20':'1.25rem',
        '17':'1.0625rem',
        '16':'1rem',
        '64':'4rem',
        '70':'4.375rem',
        '110':"6.875rem"

      },
      backgroundColor:{
        'selected': '#2A2A2A',  
      },
       textColor:{
        'selectedText':'#D9D9D9',
        'nonSelectedText':'#2A2A2A',
        'hyperLink':"#1B2BEF",
        "loadMore":"#FFF641"
       },
       borderColor:{
        'selectedBorder':'#2A2A2A'
       },
       rotate:{
        '-4':"-4deg"
      },
      screens:{
        sm:'640px',
        md: '728px',
        lg: '1280px',
        xl: '1440px',       
      },
      container:{
        center:true,
        padding: {
          DEFAULT: '1rem',    
        },
      }
    },
    
  },
  plugins: [],
};
