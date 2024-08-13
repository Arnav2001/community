
import "./globals.css";
import '@mantine/core/styles.css';
import ClientProviders from './ClientProvider';


export const metadata = {
  title: "Kreatr",
  description: "Kreatr Website description",
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
