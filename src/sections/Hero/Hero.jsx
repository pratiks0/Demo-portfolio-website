import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme == 'light' ? sun:moon;
    const twitterIcon = theme == 'light' ? twitterLight:twitterDark;
    const githubIcon = theme == 'light' ? githubLight:githubDark;
    const linkedinIcon = theme == 'light' ? linkedinLight:linkedinDark;


  return (
    <>
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="profile pic" />
            <img className={styles.colorMode} src={themeIcon} alt="color mode icon" onClick={toggleTheme} />
        </div>
        <div className={styles.info}>
            <h1>
                Pratik 
                <br />
                Singh
            </h1>
            <h2>Full Stack Developer</h2>
            <span>
                <a href="https://x.com/prat1k_s" target='_blank'>
                <img src={twitterIcon} alt="twitter icon" />
                </a>
                <a href="https://github.com/pratiks0" target='_blank'>
                <img src={githubIcon} alt="twitter icon" />
                </a>
                <a href="https://www.linkedin.com/in/pratik-singh-a20389314/" target='_blank'>
                <img src={linkedinIcon} alt="twitter icon" />
                </a>
            </span>
            <p className={styles.description}>
                I'm a full stack developer with a passion for building user-friendly and visually appealing applications.
            </p>
            <a href={CV}>
                <button className="hover">
                    Resume
                </button>
            </a>
        </div>
    </section>
    <div
        style={{
          width: '80%',
          height: '2px',
          backgroundColor: '#ccc',
          margin: '40px auto',
          borderRadius: '5px',
        }}
      ></div>
    </>
  )
}

export default Hero
