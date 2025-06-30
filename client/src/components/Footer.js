import styles from './Footer.module.css'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.copyright}>
        © 2025 Shivansh Tiwari | Full Stack Developer<br />
        Made with <span className={styles.heart}>❤️</span> using Next.js, GSAP, Three.js
      </div>
      <div className={styles.links}>
        <a href="#home" className={styles.link}>Home</a>
        <a href="#about" className={styles.link}>About</a>
        <a href="#projects" className={styles.link}>Projects</a>
        <a href="#contact" className={styles.link}>Contact</a>
      </div>
    </div>
  </footer>
)

export default Footer 