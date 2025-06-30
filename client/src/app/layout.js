import { Poppins, JetBrains_Mono } from 'next/font/google'
import './globals.css'


const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Shivansh Tiwari - Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Node.js, MongoDB, and modern web technologies. Building scalable, user-friendly applications with a focus on performance and visual appeal.',
  keywords: 'Full Stack Developer, React, Node.js, MongoDB, Next.js, GSAP, Three.js',
  authors: [{ name: 'Shivansh Tiwari' }],
  openGraph: {
    title: 'Shivansh Tiwari - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Node.js, MongoDB, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${poppins.variable} ${jetbrainsMono.variable} antialiased bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  )
}
