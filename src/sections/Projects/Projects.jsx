import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr-removebg-preview.png';
import freshBurger from '../../assets/realogo-removebg-preview.png';
import fitLift from '../../assets/fitlift-removebg-preview.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={freshBurger}
          link="https://real-estate-website-mocha-eta.vercel.app/"
          h3="Real Estate"
        />
        <ProjectCard
          src={viberr}
          link="https://endearing-marigold-97e1af.netlify.app/"
          h3="Sputifi"
        />
        <ProjectCard
          src={fitLift}
          link="https://youtu.be/dQw4w9WgXcQ?si=mX8yj6vEcy9WOFNw"
          h3="FitLift"
        />
      </div>
    </section>
  );
}

export default Projects;