
import Navbar from '@/components/ui/navbar/Navbar'
import './globals.css'
import Footer from '@/components/ui/Footer'
export const metadata = {
  title: 'Ryuichi Oshimoto Official Website',
  description: 'Generated by create next app',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="text-white text-[16px] bg-black-950 font-BrandonGrotesque">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}