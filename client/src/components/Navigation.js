'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import styles from './Navigation.module.css'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          {/* Logo */}
          <div className={styles.logo}>
            <span className="logo" style={{
              fontWeight: 700,
              fontSize: '2rem',
              color: '#5a6fff',
              padding: '0.25em 0.75em',
              background: 'rgba(0,0,0,0.25)',
              borderRadius: '0.5em',
              textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 1px 0 #fff',
              letterSpacing: '0.05em',
            }}>
              ST
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <div className={styles.navList}>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={styles.navItem}
                >
                  {item.name}
                  <span className={styles.navItemUnderline}></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.mobileMenuBtn}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isOpen ? styles.isOpen : ''}`}>
        <div className={styles.mobileNavList}>
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={styles.mobileNavItem}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation 