import React from 'react';
import react from '../../assets/icons/react.svg'
import SkillBar from '../SkillBar/SkillBar';
import c from '../../assets/icons/c-programming-48.png'
import C from '../../assets/icons/icons8-c++-50.png'
import Js from '../../assets/icons/icons8-javascript-logo-50.png'
import reacct from '../../assets/icons/icons8-react-64.png'
import node from '../../assets/icons/icons8-nodejs-32.png'
import html from '../../assets/icons/icons8-html-5-48.png'
import css from '../../assets/icons/icons8-css3-64.png'
import vsc from '../../assets/icons/icons8-visual-studio-30.png'
import mongodb from '../../assets/icons/icons8-mongodb-48.png'
import postman from '../../assets/icons/icons8-postman-api-64.png'
const languages =[
    {
        icon:c,
        name:'C',
        level:'75'
    },
    {
        icon:C,
        name:'C++',
        level:'80'
    },
    {
        icon:Js,
        name:'Js',
        level:'76'
    },
    {
        icon:reacct,
        name:'React',
        level:'66'
    },
    {
        icon:node,
        name:'Node',
        level:'56'
    },
    {
        icon:html,
        name:'HTML5',
        level:'86'
    },
    {
        icon:css,
        name:'Css',
        level:'76'
    },
]

const tools =[
    {
        icon:vsc,
        name:'Vs Code',
        level:'80'
    },
    {
        icon:postman,
        name:'Postman',
        level:'75'
    },
    {
        icon:mongodb,
        name:'Mongodb',
        level:'66'
    },
]

const Resume = () => {
    return (
        <div className="container resume">
        <div className="row">
            <div className="col-lg-6 resume-card" >
                <h4 className="resume-card__heading">
                    Education
                </h4>
                <div className="resume-card__body">
                    <h5 className="resume-card__title">
                        Computer Science Enginnering
                    </h5>
                    <p className="resume-card__name">
                       Daffodil International University(2015-2019)
                    </p>
                    <p className="resume-card__details">I am currently persuing B.Sc in Computer Science Engineering from Daffodil InterNational University</p>
                </div>
            </div>
            <div className="col-lg-6 resume-card" >
                <h4 className="resume-card__heading">
                    Experience
                </h4>
                <div className="resume-card__body">
                    <h5 className="resume-card__title">
                        Complete Course
                    </h5>
                    <p className="resume-card__name">
                        Programming Hero as (MERN Stack Dev)
                    </p>
                    <p className="resume-card__details">I work as a Fresher and also completed some projects on React App</p>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-6 resume-languages">
                <h5 className="resume-language__heading">
                    Language and Framework
                </h5>
                <div className="resume-language__body mt-3">
                    {
                        languages.map(language =>
                            <SkillBar value={language} />
                        )
                    }
                </div>
            </div>
            <div className="col-lg-6 resume-languages">
                <h5 className="reume-language__heading">
                    Tools and Softwares
                </h5>
                <div className="resume-language__body mt-3">
                    {
                        tools.map(tool => <SkillBar value={tool} />)
                    }
                </div>
            </div>
        </div>
    </div>
    );
};

export default Resume;