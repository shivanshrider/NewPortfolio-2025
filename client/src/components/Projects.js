'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import styles from './Projects.module.css'
import Image from 'next/image'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const projectsRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: 'CU Hackathon Reimbursement Portal',
      description: 'Streamlined portal for managing hackathon reimbursements and participant data.',
      longDescription: 'Built an efficient portal for managing hackathon reimbursements, participant registrations, and payment tracking. Features include automated email notifications, document verification, and reporting system.',
      image: '/projects/CU RP-SS.png',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Nodemailer'],
      liveUrl: 'https://cu-rp-main.vercel.app/',
      githubUrl: 'https://github.com/shivanshrider/CU_RP-main',
      challenges: 'Implemented secure payment processing and automated workflow management.',
      learnings: 'Learned about financial data handling and automated system workflows.'
    },
    {
      id: 2,
      title: 'Event Attendance Management',
      description: 'A web application to manage event attendance efficiently, built for organizers and participants.',
      longDescription: 'Event Attendance Management is a full-stack project that allows event organizers to track and manage attendance, generate reports, and streamline the check-in process. Features include real-time updates, secure authentication, and a user-friendly dashboard for both admins and users.',
      image: '/projects/CAC-SS.png',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/shivanshrider/EventAttandanceManagement',
      challenges: 'Ensured real-time accuracy of attendance data and implemented secure authentication for all users.',
      learnings: 'Learned about real-time data handling, authentication, and building scalable event management systems.'
    },
    {
      id: 3,
      title: 'CAC Club Website',
      description: 'Official website for the CU Club with events detail and Achievers Data',
      longDescription: 'Developed a modern, responsive website for the CU Club featuring events, Achievers Data, and interactive UI components. Includes Team Profile.',
      image: '/projects/CAC-SS.png',
      technologies: ['HTML', 'CSS Modules', 'JavaScript', 'GoDaddy'],
      liveUrl: 'http://cacclub.in/',
      githubUrl: 'https://github.com/shivanshrider/CAC-2024',
      challenges: 'Created smooth animations and transitions while maintaining performance.',
      learnings: 'Mastered GSAP animations and learned to balance aesthetics with functionality.'
    },
    {
      id: 4,
      title: 'CU Co-curricular Repository Website',
      description: 'A centralized online repository for Chandigarh University to access, download, and submit co-curricular documentation.',
      longDescription: 'PVC Co-Curricular Repository is a responsive web platform designed for the Academic Affairs (Co-Curricular Activities) department at Chandigarh University. It provides categorized sections for official documents, one-click downloads, a dynamic carousel for announcements, and a user-friendly UI for both students and faculty.',
      image: '/projects/PVC-COCUR-SS.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      liveUrl: 'https://pvcco-curricularrepo.netlify.app/',
      githubUrl: 'https://github.com/shivanshrider/pvc.co-curricularrepo',
      challenges: 'Designed a clean, intuitive UI and implemented organized document management for a large user base.',
      learnings: 'Learned about responsive design, user experience, and building scalable document repositories.'
    }
  ]

  useEffect(() => {
    const initAnimations = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(projectsRef.current, 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: projectsRef.current,
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
    <section id="projects" ref={projectsRef} className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            Featured{' '}
            <span className={styles.gradientText}>
              Projects
            </span>
          </h2>
          <p className={styles.subtitle}>
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={styles.projectCard}
            >
              {/* Project Image */}
              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={project.title + ' screenshot'}
                  className={styles.image}
                  width={600}
                  height={400}
                />
              </div>

              {/* Project Content */}
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>
                  {project.title}
                </h3>
                <p className={styles.description}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className={styles.techStack}>
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className={styles.techTag}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={styles.moreTag}>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className={styles.actions}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={styles.viewButton}
                  >
                    View Details
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubButton}
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.modal}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className={styles.closeButton}
                >
                  <X size={24} />
                </button>
              </div>

              <div className={styles.modalBody}>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title + ' screenshot'}
                  className={styles.modalImage}
                  width={800}
                  height={600}
                />
                <div className={styles.modalSection}>
                  <p className={styles.modalText}>
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>Technologies Used</h4>
                  <div className={styles.modalTechStack}>
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={styles.modalTechTag}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>Challenges & Solutions</h4>
                  <p className={styles.modalText}>{selectedProject.challenges}</p>
                </div>

                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>Key Learnings</h4>
                  <p className={styles.modalText}>{selectedProject.learnings}</p>
                </div>

                <div className={styles.modalActions}>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalButton}
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalButton}
                  >
                    <Github size={20} />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects 