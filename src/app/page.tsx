"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <main className={styles.container}>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>KIRTI SHARMA</div>
        
        {/* Mobile Menu Toggle */}
        <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
          <div className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.navOpen : ""}`}>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Work</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Expertise</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#contact" className={styles.contactBtn} onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`${styles.hero} fade-in`}>
        <div className={styles.heroContent}>
          <p className={styles.subheadline}>Architect | Interior Designer | Planner</p>
          <h1 className={styles.mainTitle}>
            Crafting <span className={styles.italic}>Spaces</span> That Breathe 
            <br /> Life and <span className={styles.accent}>Structure</span>.
          </h1>
          <p className={styles.heroBio}>
            An Architect and Interior Designer dedicated to merging minimalist aesthetics 
            with structural precision to develop innovative and sustainable 
            architectural solutions.
          </p>
          <div className={styles.heroActions}>
            <a href="#projects" className={styles.primaryBtn}>Explore Projects</a>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <div className={styles.photoContainer}>
            <Image 
              src="/kirti.jpg" 
              alt="Kirti Sharma" 
              width={450} 
              height={550} 
              className={styles.heroPhoto}
              priority
            />
            <div className={styles.imageOverlay}></div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="services" className={styles.expertiseSection}>
        <h2 className={`${styles.sectionTitle} fade-in delay-1`}>EXPERT <span className={styles.accent}>ISE</span></h2>
        <div className={styles.expertiseGrid}>
          <div className={`${styles.expertiseCard} fade-in delay-1`}>
            <div className={styles.cardNum}>01</div>
            <h3>Architecture</h3>
            <p>Thoughtful structural designs that balance form and function, ensuring longevity and elegance.</p>
          </div>
          <div className={`${styles.expertiseCard} fade-in delay-2`}>
            <div className={styles.cardNum}>02</div>
            <h3>Interior Design</h3>
            <p>Curating cohesive indoor environments that reflect personality while optimizing space efficiency.</p>
          </div>
          <div className={`${styles.expertiseCard} fade-in delay-3`}>
            <div className={styles.cardNum}>03</div>
            <h3>Urban Planning</h3>
            <p>Large-scale planning focusing on community-centric layouts and sustainable development.</p>
          </div>
        </div>
      </section>

      {/* Selected Works */}
      <section id="projects" className={styles.projectsSection}>
        <div className={styles.projectsHeader}>
          <h2 className={`${styles.sectionTitle} fade-in`}>SELECTED <span className={styles.accent}>WORKS</span></h2>
          <p className={styles.projectsIntro}>A glimpse into my design philosophy through real environments.</p>
        </div>
        
        <div className={styles.projectsGrid}>
          <div className={`${styles.projectCard} fade-in delay-1`}>
            <div className={styles.projectImage}>
              <Image src="/living-room.png" alt="Living Room Design" fill style={{objectFit: 'cover'}} />
            </div>
            <div className={styles.projectInfo}>
              <h4>MINIMALIST LIVING</h4>
              <p>Interior Design / Residential</p>
            </div>
          </div>
          <div className={`${styles.projectCard} fade-in delay-2`}>
            <div className={styles.projectImage}>
              <Image src="/villa-exterior.png" alt="Modern Villa" fill style={{objectFit: 'cover'}} />
            </div>
            <div className={styles.projectInfo}>
              <h4>THE CONCRETE VILLA</h4>
              <p>Architecture / Structural</p>
            </div>
          </div>
          {/* Add more as needed */}
        </div>
      </section>

      {/* About / Intro */}
      <section id="about" className={styles.aboutSection}>
        <div className={`${styles.aboutGrid} fade-in`}>
          <div className={styles.aboutText}>
            <h2>About <span className={styles.accent}>Kirti</span></h2>
            <p>
              Professional Architect and Interior Designer with a focus on delivering 
              high-impact, sustainable solutions through minimalist design and precision 
              planning. My methodology is defined by integrating functional efficiency 
              with refined aesthetics to meet modern professional standards.
            </p>
            <div className={styles.statsRow}>
              <div>
                <strong>21</strong>
                <p>Years Old</p>
              </div>
              <div>
                <strong>Architecture</strong>
                <p>Expertise</p>
              </div>
            </div>
          </div>
          <div className={styles.aboutVisual}>
             <div className={styles.boxStructure}></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contactSection}>
        <div className={`${styles.contactContainer} fade-in`}>
          <div className={styles.contactHeader}>
            <h2>Let&apos;s Build <span className={styles.accent}>Something</span> Together.</h2>
            <p>Collaborate on your next architectural or interior project.</p>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span>Call Me</span>
              <a href="tel:7206077833">+91 7206077833</a>
            </div>
            <div className={styles.contactItem}>
              <span>Follow</span>
              <a href="https://instagram.com/__kirtiiiiii" target="_blank" rel="noopener noreferrer">@__kirtiiiiii</a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Kirti Sharma Portfolio. All rights reserved.</p>
      </footer >
    </main>
  );
}
