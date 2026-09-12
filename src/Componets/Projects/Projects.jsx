import React from 'react'
import styles from './ProjectsStyles.module.css'
//Import for projects
import cabañas from '../../assets/CabañasWeb.png';
import pimenta from '../../assets/pimenta-studio.png';
import guanatickets from '../../assets/guanatickets.png';
import rinconrealty from '../../assets/rinconrealty.png';

import jornadas from '../../assets/jornadas.jpg';
import game from '../../assets/GameSpace.png';
import ticostaDesign from '../../assets/TicostaWeb.png';
import Mypreset from '../../assets/MyPreset.png';

import ProjectCard from '../../common/ProjectCard'

function Projects() {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Proyectos</h1>
            <div className={styles.projectsContainer}>

                <ProjectCard src={pimenta} link="https://www.pimenta.studio/"
                h3="Pimenta Studio"
                p="Web para empresa"/>

                <ProjectCard src={guanatickets} link="https://www.guanacastetickets.com/"
                h3="Guanacaste Tickets"
                p="Web de tickets para turismo"/>

                <ProjectCard src={rinconrealty} link="https://www.rinconrealtycr.com/"
                h3="Rincon Realty"
                p="Web para bienes raíces"/>

                <ProjectCard src={cabañas} link="https://www.cabanasdonramiro.com/"
                h3="Cabañas Don Ramiro"
                p="Web para hotel / wordpress"/>                                                                                                                                                                                

            </div>
            <hr />
            <div className={styles.projectsContainer}>

                <ProjectCard src={jornadas} link=""
                h3="Jornadas de Investigación"
                p="Identidad gráfica UCR / Adobe Suite"/>

                <ProjectCard src={game} link="https://www.figma.com/design/jLsRtvPAJJCjm25YBuJBOO/VideoGames-of-2023?node-id=0-1"
                h3="Game Space"
                p="Diseño web / Figma"/>

                <ProjectCard src={Mypreset} link="https://www.figma.com/file/AJGyjVX9Ntuob1uZPS7rXv/My-Preset-App?type=design&node-id=0%3A1&mode=design&t=btlDa77EsF590UQi-1"
                h3="My preset"
                p="Diseño de app / Figma"/>

            </div>
        </section>
    );
}

export default Projects
