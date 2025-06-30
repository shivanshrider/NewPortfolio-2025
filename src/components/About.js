'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './About.module.css'
import Image from 'next/image'

const About = () => {
  const aboutRef = useRef(null)

  useEffect(() => {
    const initAnimations = async () => {
      await document.fonts.ready;
      await new Promise(res => setTimeout(res, 200));
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      const { SplitText } = await import('gsap/SplitText')
      
      gsap.registerPlugin(ScrollTrigger, SplitText)

      // Animate the section when it comes into view
      gsap.fromTo(aboutRef.current, 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Animate the text
      const text = new SplitText('.about-text', { type: 'lines, words' })
      gsap.from(text.words, {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.02,
        scrollTrigger: {
          trigger: '.about-text',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      })
    }

    initAnimations()
  }, [])

  const skills = [
    'React.js', 'Node.js', 'MongoDB', 'Express.js',
    'Next.js', 'GSAP', 'Three.js', 'TypeScript',
    'Firebase', 'JWT', 'UI/UX Design', 'Git',
    'Postman', 'Vercel', 'CSS Modules', 'Framer Motion'
  ]

  return (
    <section id="about" ref={aboutRef} className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            About{' '}
            <span className={styles.gradientText}>
              Me
            </span>
          </h2>
          <p className={styles.subtitle}>
            Passionate about creating digital experiences that matter
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* Left Side - Avatar/Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.avatarContainer}
          >
            <div className={styles.avatarWrapper}>
              {/* Profile image */}
              <div className={styles.avatar}>
                <Image
                  src="/profile/Profile.jpg"
                  alt="Profile picture"
                  width={120}
                  height={120}
                  className={styles.avatarImg}
                  priority
                />
              </div>
              
              {/* Floating animation rings */}
              <motion.div
                className={`${styles.ring} ${styles.ring1}`}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className={`${styles.ring} ${styles.ring2}`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.content}
          >
            <p className={`about-text ${styles.text}`}>
              A dynamic and goal-oriented developer skilled in building scalable, user-friendly applications with a focus on clarity, performance, and visual appeal. Experienced with the{' '}
              <span className={`${styles.codeText} ${styles.blueText}`}>MERN stack</span>, animations with{' '}
              <span className={`${styles.codeText} ${styles.greenText}`}>GSAP</span>, and 3D interfaces using{' '}
              <span className={`${styles.codeText} ${styles.purpleText}`}>Three.js</span>. Also a passionate designer with an eye for modern, user-centric UI.
            </p>

            {/* Education Section */}
            <div className={styles.educationSection}>
              <h3 className={styles.educationTitle}>Education</h3>
              <div className={styles.educationList}>
                <div className={styles.educationItem}>
                  <div className={styles.educationSchool}>Chandigarh University</div>
                  <div className={styles.educationDegree}>Bachelor of Engineering in Computer Science</div>
                  <div className={styles.educationLocation}>Mohali, Punjab</div>
                  <div className={styles.educationYear}>Aug 2022 - Apr 2026</div>
                  <div className={styles.educationMajors}><b>Majors:</b> Computer Network, Operating System, Computer Organization Architecture, DBMS, TOC, Computer Graphics</div>
                </div>
              </div>
            </div>

            <div>
              <motion.a
                href="/public/RESUME- Shivansh Tiwari_2025.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.resumeButton}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 