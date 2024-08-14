
import "./globals.css";
import '@mantine/core/styles.css';
import ClientProviders from './ClientProvider';


export const metadata = {
  title: "Kreatr: Your Gateway to Creative Community | Bangalore, India",
  description: " Looking for a community that meets your creative needs? Kreatr is a digital ecosystem that supports creatives across all fields of design. Join our community!",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className='bg-img md:min-h-[100vh] xl:min-h-[100vh]'> 
        <ClientProviders>
        {children}     
        </ClientProviders>
        
        </body>
      
    </html>
  );
}
