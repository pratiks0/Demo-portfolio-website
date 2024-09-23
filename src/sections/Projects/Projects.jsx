import React from 'react'
import Viberr from '../../assets/viberr.png'

function Projects() {
  return (
   <section id="projects" className={StyleSheet.container}>
    <h1 className='sectionTitle'>Projects</h1>
    <div className={StyleSheet.projectsContainer}>
        <a href="https://github.com/pratiks0/music_player.git">
        <img className='hover' src={Viberr} alt="music player" /></a>
    </div>
   </section>
  )
}

export default Projects
