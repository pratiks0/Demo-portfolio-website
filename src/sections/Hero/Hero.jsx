import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import twitterIcon from '../../assets/twitter-light.svg'
import githubIcon from '../../assets/github-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/cv.pdf'

function Hero() {
  return (
    <section id='hero' className={styles.conatiner}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="profile pic" />
            <img className={styles.colorMode} src={themeIcon} alt="color mode icon" />
        </div>
        <div className="styles.info">
            <h1>
                Pratik 
                <br />
                Singh
            </h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href="https://twitter.com/" target='_blank'>
                <img src={twitterIcon} alt="twitter icon" />
                </a>
                <a href="https://github.com/" target='_blank'>
                <img src={githubIcon} alt="twitter icon" />
                </a>
                <a href="https://linkedin.com/" target='_blank'>
                <img src={linkedinIcon} alt="twitter icon" />
                </a>
            </span>
            <p>
                I'm a frontend developer with a passion for building user-friendly and visually appealing applications.
            </p>
            <a href={CV}>
                <button className='hover'>
                    Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero
