import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Stars from '@/components/sub/Stars'
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Musunza Festus - Web Developer Portfolio',
  description: 'Explore the portfolio of Daniel Musunza Festus, a passionate web developer showcasing skills and projects.',
  viewport: 'width=device-width, initial-scale=1.0'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <header>
      <meta property="og:title" content="Musunza Festus - Web Developer Portfolio" />
        <meta property="og:description" content='Explore the portfolio of Daniel Musunza Festus, a passionate web developer showcasing skills and projects.' />
        
        <meta property="og:url" content='https://musunzafestus.vercel.com' />
      </header>
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
      {/* eslint-disable */}
        <div itemscope itemtype='http://schema.org/Person' class='fiverr-seller-widget' style={{display: 'inline-block'}}>
          <a itemprop='url' href='https://www.fiverr.com/musunza1' rel="nofollow" target="_blank" style={{display: 'inline-block'}}>
        <div class='fiverr-seller-content' id='fiverr-seller-widget-content-f07bf962-de52-44b2-9c3e-1fa4c3f8694a' itemprop='contentURL' style={{display: 'none'}}></div>
          <div id='fiverr-widget-seller-data' style={{display: 'none'}}>
            <div itemprop='name' >musunza1</div>
            <div itemscope itemtype='http://schema.org/Organization'><span itemprop='name'>Fiverr</span></div>
            <div itemprop='jobtitle'>Seller</div>
            <div itemprop='description'>🚀 Web Developer Extraordinaire!

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

              Let's chat about your project!</div>
          </div>
        </a>
      </div>
      /* eslint-enable */
      <script id='fiverr-seller-widget-script-f07bf962-de52-44b2-9c3e-1fa4c3f8694a' src='https://widgets.fiverr.com/api/v1/seller/musunza1?widget_id=f07bf962-de52-44b2-9c3e-1fa4c3f8694a' data-config='{"category_name":"\n                                    Programming \u0026 Tech\n\n                            "}' async='true' defer='true'></script>

      <Navbar />
      <Stars />
      {children}
      <Footer />
    </body>
    </html >
  )
}
