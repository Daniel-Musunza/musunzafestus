import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Stars from '@/components/sub/Stars'
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Musunza Festus - Software Engineer',
  description: `Explore the portfolio of Musunza Festus (Daniel), 🚀 Web Developer Extraordinaire!

  🚀 Hi, I'm Musunza Festus! Your go-to web developer on Fiverr. 💻 I craft sleek websites with responsive design and cutting-edge tech. Let's turn your vision into a digital reality!
  
  🌟 What I Offer:
  
  ✨ Responsive Design
  🚀 Front-end Magic
  🔧 Back-end Wizardry
  💼 Full-Stack Brilliance
  
  🌟 Why Choose Me:
  
  🎯 Results First
  🚀 Tech-Savvy
  🤝 Collaborative Spirit
  
  🌐 Ready to Start?
  
  Let's chat about your project!",
  viewport: 'width=device-width, initial-scale=1.0`
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <header>
        <meta property="og:title" content="Musunza Festus - Software Engineer" />
        <meta property="og:description" content="Explore the portfolio of Musunza Festus (Daniel), 🚀 Web Developer Extraordinaire!

🚀 Hi, I'm Musunza Festus! Your go-to web developer on Fiverr. 💻 I craft sleek websites with responsive design and cutting-edge tech. Let's turn your vision into a digital reality!

🌟 What I Offer:

✨ Responsive Design
🚀 Front-end Magic
🔧 Back-end Wizardry
💼 Full-Stack Brilliance

🌟 Why Choose Me:

🎯 Results First
🚀 Tech-Savvy
🤝 Collaborative Spirit

🌐 Ready to Start?

Let's chat about your project!" />
       
        <meta property="og:url" content="https://musunzafestus.vercel.app" />
      </header>

      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>


        <Navbar />
        <Stars />
        {children}
        <Footer />
      </body>
    </html >
  )
}
