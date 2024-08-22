
import "./globals.css";
import '@mantine/core/styles.css';
import ClientProviders from './ClientProvider';
import Script from "next/script";


export const metadata = {
  title: "Kreatr: Your Gateway to Creative Community | Bangalore, India",
  description: " Looking for a community that meets your creative needs? Kreatr is a digital ecosystem that supports creatives across all fields of design. Join our community!",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NS8SNVHC');`,
          }}
        ></Script>
      </head>
      
      <body  className='bg-img md:min-h-[100vh] xl:min-h-[100vh]'> 
        <ClientProviders>
        {children}     
        </ClientProviders>
        
        </body>
      
    </html>
  );
}
