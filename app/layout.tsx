import './globals.css'
import Navbar from './components/ui/Navbar/Navbar'
import Footer from './components/ui/Footer'


export const metadata = {
  title: 'Ryuichi Oshimoto | Photography',
  description: "Explore the stunning photography of Japanese photographer Ryuichi Oshimoto (押本龍一), based in Japan (日本). Specializing in landscape and portrait photography, his work captures the beauty of nature and the human spirit. Visit his portfolio site now! (彼のポートフォリオサイトを今すぐ訪問してください！)"
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>

        <meta name="description" content="Ryuichi Oshimoto Photographer Portfolio Website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nixie+One&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />




      </head>
      <body className='text-white'>
        <Navbar />
        {children}
        <Footer/>
        
      </body>
    </html>
  )
}
