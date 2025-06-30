'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Box } from '@react-three/drei'
import styles from './TechStack.module.css'
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt, FaNpm, FaLock, FaCube } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiMongodb, SiExpress, SiFirebase, SiGreensock, SiPostman, SiVercel, SiFigma, SiFramer } from 'react-icons/si'
import Tilt from 'react-parallax-tilt'

const TechCube = () => {
  const meshRef = useRef()

  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    meshRef.current.rotation.y += 0.01
  })

  const technologies = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Node.js', color: '#339933' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'Next.js', color: '#000000' },
    { name: 'GSAP', color: '#88CE02' },
    { name: 'Three.js', color: '#000000' }
  ]

  return (
    <group ref={meshRef}>
      {technologies.map((tech, index) => {
        const angle = (index / technologies.length) * Math.PI * 2
        const radius = 2
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <group key={tech.name} position={[x, y, 0]}>
            <Box args={[0.5, 0.5, 0.5]}>
              <meshStandardMaterial color={tech.color} />
            </Box>
            <Text
              position={[0, 0, 0.4]}
              fontSize={0.2}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              {tech.name}
            </Text>
          </group>
        )
      })}
    </group>
  )
}

const techIconMap = {
  'React.js': <FaReact color="#61DAFB" />, 'Next.js': <SiNextdotjs color="#fff" />, 'TypeScript': <SiTypescript color="#3178c6" />, 'CSS Modules': <FaCss3Alt color="#264de4" />, 'GSAP': <SiGreensock color="#88CE02" />, 'Three.js': <FaCube color="#fff" />,
  'Node.js': <FaNodeJs color="#339933" />, 'Express.js': <SiExpress color="#fff" />, 'MongoDB': <SiMongodb color="#47A248" />, 'Firebase': <SiFirebase color="#FFCA28" />, 'JWT': <FaLock color="#EA580C" />,
  'Git': <FaGitAlt color="#F05032" />, 'Postman': <SiPostman color="#FF6C37" />, 'Vercel': <SiVercel color="#fff" />, 'UI/UX Design': <SiFigma color="#A259FF" />, 'Framer Motion': <SiFramer color="#0055FF" />
}

const TechStack = () => {
  const techRef = useRef(null)

  useEffect(() => {
    const initAnimations = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(techRef.current, 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: techRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    initAnimations()
  }, [])

  const techCategories = [
    {
      title: 'Frontend',
      technologies: ['React.js', 'Next.js', 'TypeScript', 'CSS Modules', 'GSAP', 'Three.js']
    },
    {
      title: 'Backend',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'JWT']
    },
    {
      title: 'Tools & Others',
      technologies: ['Git', 'Postman', 'Vercel', 'UI/UX Design', 'Framer Motion']
    }
  ]

  return (
    <section id="tech-stack" ref={techRef} className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            Tech{' '}
            <span className={styles.gradientText}>
              Stack
            </span>
          </h2>
          <p className={styles.subtitle}>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* Tech Categories Only - 3D Cube removed */}
          <div className={styles.techCategories}>
            {techCategories.map((category) => (
              <div key={category.title} className={styles.category}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <div className={styles.techList}>
                  {category.technologies.map((tech) => (
                    <Tilt key={tech} glareEnable={true} glareMaxOpacity={0.15} glareColor="#a78bfa" glarePosition="all" scale={1.07} transitionSpeed={1200} tiltMaxAngleX={12} tiltMaxAngleY={12} style={{ borderRadius: '9999px' }}>
                      <span className={styles.chip}>
                        {techIconMap[tech] && (
                          <span style={{ marginRight: 8, fontSize: '1.1em', verticalAlign: 'middle' }}>{techIconMap[tech]}</span>
                        )}
                        {tech}
                      </span>
                    </Tilt>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack 