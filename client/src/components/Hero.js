'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Code, Zap, Sparkles } from 'lucide-react'
import DynamicBackground from './DynamicBackground'
import styles from './Hero.module.css'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const initAnimations = async () => {
      await document.fonts.ready;
      await new Promise(res => setTimeout(res, 200));
      const { gsap } = await import('gsap')
      const { SplitText } = await import('gsap/SplitText')
      gsap.registerPlugin(SplitText)

      const tl = gsap.timeline()
      
      // Animate the main heading
      const heading = new SplitText('.hero-heading', { type: 'chars, words' })
      tl.from(heading.chars, {
        duration: 0.8,
        y: 100,
        opacity: 0,
        stagger: 0.02,
        ease: 'power4.out'
      })

      // Animate the subtitle
      tl.from('.hero-subtitle', {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
      }, '-=0.4')

      // Animate the CTA button
      tl.from('.hero-cta', {
        duration: 0.6,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
      }, '-=0.2')
    }

    initAnimations()
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" ref={heroRef} className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>
      {/* Dynamic 3D Background */}
      <div style={{position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none'}}>
        <DynamicBackground />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Icons */}
          {/* Removed iconContainer for a cleaner look */}

          <h1 className={`hero-heading ${styles.heading}`}>
            Hey, I'm{' '}
            <span className={styles.nameText}>
              {/* Rainbow effect for each letter */}
              {'Shivansh'.split('').map((char, idx) => (
                <span key={idx} className={styles.rainbowLetter}>{char}</span>
              ))}
            </span>
          </h1>
          
          <h2 className={`hero-subtitle ${styles.subtitle}`}>
            <span className={`${styles.codeText} ${styles.blueText}`}>Full Stack Developer</span> |{' '}
            <span className={`${styles.codeText} ${styles.purpleText}`}>Creative Technologist</span>
          </h2>
          
          <p className={`hero-subtitle ${styles.description}`}>
            Building full-stack experiences with{' '}
            <span className={`${styles.codeText} ${styles.greenText}`}>performance</span>,{' '}
            <span className={`${styles.codeText} ${styles.blueText}`}>interactivity</span> &{' '}
            <span className={`${styles.codeText} ${styles.purpleText}`}>purpose</span>.
          </p>

          <motion.button
            className={`hero-cta ${styles.ctaButton}`}
            onClick={scrollToAbout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Scroll to Explore</span>
            <ChevronDown />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={styles.scrollBox}>
          <div className={styles.scrollDot}></div>
        </div>
      </motion.div>

      {/* Floating elements */}
      <div className={styles.floatingElements}>
        <motion.div
          className={styles.floatingElement}
          style={{ top: '5rem', left: '2.5rem', width: '1rem', height: '1rem', background: '#3b82f6' }}
          animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className={styles.floatingElement}
          style={{ top: '10rem', right: '5rem', width: '0.75rem', height: '0.75rem', background: '#a855f7' }}
          animate={{ y: [0, 20, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className={styles.floatingElement}
          style={{ bottom: '10rem', left: '5rem', width: '0.5rem', height: '0.5rem', background: '#ec4899' }}
          animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
        />
      </div>
    </section>
  )
}

export default Hero 