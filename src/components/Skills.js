import React from 'react'
import "./Skills.css"
import html from './Images/html.png'
import css from './Images/css.png'
import js from './Images/js.png'
import react from './Images/react.png'

function Skills() {
    return (
        <div className="skills component__space " id="Skills">
            <h1 className="hh">SKILLS</h1>
            <img className="gg" src={html} alt="img.."/>
            <img className="gg" src={css} alt="img.."/>
            <img className="gg" src={js} alt="img.."/>
            <img className="gg" src={react} alt="img.."/>
        </div>
    )
}

export default Skills