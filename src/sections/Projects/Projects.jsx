import styles from "./ProjectStyles.module.css";
import threed from "../../assets/3d.png";
import real from "../../assets/real.png";
import book from "../../assets/book.png";
import juice from "../../assets/juice.png";
import ProjectCard from "../../common/ProjectCard";
import pinterest from "../../assets/Pinterest.png";

function Projects() {
  return (
    <>
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={real}
          link="https://real-estate-website-mocha-eta.vercel.app/"
          h3="Real Estate"
        />
        <ProjectCard
          src={threed}
          link="https://3diphonewebgi.netlify.app"
          h3="3d iPhone"
        />
        <ProjectCard
          src={book}
          link="https://book-store-seven-brown.vercel.app"
          h3="Book Store"
        />
        <ProjectCard
          src={pinterest}
          link="https://github.com/pratiks0/pinterest-clone"
          h3="Pinterest Clone"
        />
        <ProjectCard
          src={juice}
          link="https://iridescent-haupia-cf780c.netlify.app"
          h3="Naturalist"
        />
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
  );
}

export default Projects;
