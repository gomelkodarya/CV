import React from "react";
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'HTML/CSS'} description={'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'}/>
                    <Skill title={'JavaScript'} description={'JS is a programming language that conforms to the ECMAScript specification.[11] JavaScript is high-level, often just-in-time compiled and multi-paradigm. It has dynamic typing, prototype-based object-orientation and first-class functions.'}/>
                    <Skill title={'React'} description={'React is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components.'}/>
                </div>
            </div>
        </div>
    )
}