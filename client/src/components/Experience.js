'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Award, Code, Users } from 'lucide-react'
import styles from './Experience.module.css'

const Experience = () => {
  const experienceRef = useRef(null)

  const experiences = [
    {
      id: 1,
      title: 'React.js Intern',
      company: 'Celebal Technologies',
      period: 'June 2025 - August 2025',
      description: 'Built responsive web applications using React Hooks, JSX, and modern JavaScript. Collaborated with development teams using agile methodologies.',
      icon: <Code className="w-6 h-6" />,
      type: 'work'
    },
    {
      id: 2,
      title: 'Secretary',
      company: 'CAC Club',
      period: '2024 - Present',
      description: 'Organized 50+ technical events and workshops. Led the official website revamp project and managed club operations.',
      icon: <Users className="w-6 h-6" />,
      type: 'leadership'
    },
    {
      id: 3,
      title: 'Campus Ambassador',
      company: 'Hack2Skill, Coding Ninjas, Coding Blocks',
      period: '2023 - Present',
      description: 'Represented multiple tech platforms on campus, organized coding competitions, and mentored junior students.',
      icon: <Award className="w-6 h-6" />,
      type: 'ambassador'
    }
  ]

  const achievements = [
    {
      id: 1,
      title: 'Patent Filed',
      description: 'Innovative solution in web development',
      icon: <Award className="w-6 h-6" />
    },
    {
      id: 2,
      title: 'Research Paper Published',
      description: 'Academic contribution to computer science',
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 3,
      title: '200+ LeetCode Problems',
      description: 'Strong problem-solving skills',
      icon: <Code className="w-6 h-6" />
    }
  ]

  useEffect(() => {
    const initAnimations = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(experienceRef.current, 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: experienceRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    initAnimations()
  }, [])

  return (
    <section id="experience" ref={experienceRef} className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            Experience &{' '}
            <span className={styles.gradientText}>
              Achievements
            </span>
          </h2>
          <p className={styles.subtitle}>
            My professional journey and notable accomplishments
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className={styles.sectionTitle}>Work Experience</h3>
            
            <div className={styles.timeline}>
              {/* Timeline Line */}
              <div className={styles.timelineLine}></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={styles.timelineItem}
                >
                  {/* Timeline Dot */}
                  <div className={styles.timelineDot}></div>
                  
                  <div className={styles.experienceCard}>
                    <div className={styles.cardHeader}>
                      <div className={styles.iconContainer}>
                        {exp.icon}
                      </div>
                      <div className={styles.cardContent}>
                        <h4 className={styles.cardTitle}>{exp.title}</h4>
                        <p className={styles.company}>{exp.company}</p>
                        <div className={styles.period}>
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <p className={styles.description}>{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className={styles.sectionTitle}>Key Achievements</h3>
            
            <div className={styles.achievementGrid}>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={styles.achievementCard}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.achievementIcon}>
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className={styles.achievementTitle}>
                        {achievement.title}
                      </h4>
                      <p className={styles.achievementDescription}>{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className={styles.statsGrid}
            >
              <div className={styles.statsCard}>
                <div className={styles.statsNumber}>50+</div>
                <div className={styles.statsLabel}>Events Organized</div>
              </div>
              <div className={styles.statsCard}>
                <div className={styles.statsNumber}>200+</div>
                <div className={styles.statsLabel}>LeetCode Solved</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience 