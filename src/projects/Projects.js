import React from "react";
import style from './Projects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Project} from "./Project";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2>Projects</h2>
                <div className={style.projects}>
                    <Project title={'Todolist'} description={'Todolist'}/>
                    <Project title={'Social network'} description={'Social network'}/>
                </div>
            </div>
        </div>
    )
}