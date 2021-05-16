import React from 'react';
import js from '../../assets/icons/icons8-javascript-logo-50.png'
import react from '../../assets/icons/icons8-react-64.png'
import node from '../../assets/icons/icons8-nodejs-32.png'
import mongo from '../../assets/icons/icons8-mongodb-48.png'
import html from '../../assets/icons/icons8-html-5-48.png'
import css from '../../assets/icons/icons8-css3-64.png'
import ecommerce from '../../assets/icons/icons8-website-100.png'
import fullstack from '../../assets/icons/icons8-FullStack website-64.png'
import design from '../../assets/icons/icons8-web-design-64.png'
import resume from '../../assets/icons/icons8-resume-website-50.png'

import Skillcard from '../SkillCard/Skillcard';

const skills = [
    {
        icon: ecommerce,
        title: "ECommerce-Website",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Officiis, nobis?"
    },  {
        icon: fullstack,
        title: "Full-Stack",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Officiis, nobis?"
    },  {
        icon: design,
        title: "Web-Design",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Officiis, nobis?"
    },  {
        icon: resume,
        title: "Portfolio",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Officiis, nobis?"
    },
    {
        icon: js,
        title: "JS",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Officiis, nobis?"
    },
    {
        icon: react,
        title: "React",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Officiis, nobis?"
    },
    {
        icon: node,
        title: "Node Js",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Officiis, nobis?"
    },
    {
        icon: mongo,
        title: "MongoDb",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Officiis, nobis?"
    },
    {
        icon: html,
        title: "HTML",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Officiis, nobis?"
    },
    {
        icon: css,
        title: "CSS",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Officiis, nobis?"
    },
]
const About = () => {
    return (
        <div className="about">
            <h6 className="about_intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nobis?</h6>
            <div className="container about_container">
                <h6 className="about_heading">What I Offer</h6>
                <div className="row">
                    {
                     skills.map(skill => 
                        <Skillcard skill={skill}></Skillcard>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default About;