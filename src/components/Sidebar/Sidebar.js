import React from 'react';
import fb from '../../assets/icons/icons8-facebook-64.png'
import insta from '../../assets/icons/icons8-instagram-64.png'
import git from '../../assets/icons/github.svg'
import pin from '../../assets/icons/pin.svg'
import tie from '../../assets/icons/icons8-download-100.png'
// import mightycoder from '../../assets/mightycoder.svg'
import dp from '../../assets/dp.jpg'
import resume from '../../assets/resume.pdf'


const Sidebar = () => {
    const handleEmailMe= ()=>{
        window.open("mailto:sourav.svn.10@gmail.com")
    }
    return (
        <div className="sidebar">
            <img src={dp} alt="avatar"className="sidebar_avatar"/>
            <div className="sidebar_name">Sourav <span>Das</span> Shovon</div>
            <div className="sidebar_title">Web Developer</div>
            
                   <a href={resume} download="resume.pdf">
                       <div className="sidebar_item sidebar-resume">
                           <img src={tie} alt="" className="sidebar_icon"/>Download Resume
                       </div>
                       </a>
                       <figure className="sidebar_social-icon">
                         <a href="https://www.facebook.com/souravdas.shovon/"> <img src={fb} alt="" className="sidebar_icon"/> </a>
                         <a href="https://www.instagram.com/sourav_shovon/"> <img src={insta} alt="" className="sidebar_icon"/> </a>
                       </figure>
                       <div className="sidebar_contact">
                           <div className="sidebar_item sidebar_github">
                               <a href="#"> <img src={git} alt="location" className="sidebar_icon mr-3"/> github</a>
                           </div>
                           <div className="sidebar_location">
                               <img src={pin} alt="" className="sidebar_icon mr-3"/>
                               Faridpur Dhaka</div>
                           <div className="sidebar_item">sourav.svn.10@gmail.com</div>
                           <div className="sidebar_item">+8801716731852</div>
                       </div>
                   
            
            <div className="sidebar_item sidebar_email" onClick={handleEmailMe}>Email Me</div>
        </div>
    );
};

export default Sidebar;