import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.jpeg';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/pratiks0/music_player.git"
          h3="Sputifi"
          p="Songs Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/pratiks0/weather-app.git"
          h3="Weather Wise"
          p="Weather App"
        />
        <ProjectCard
          src={fitLift}
          link="https://youtu.be/dQw4w9WgXcQ?si=mX8yj6vEcy9WOFNw"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;