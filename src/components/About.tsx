import "./about.css";
import { icons } from "./icons";
import { LangBox } from "./Projects";
import resume from "/resume.svg";

export default function About() {
    return(
    <section id="about" className="body-container">
        <div className="desc-container">
            <h2 className="element-title">About Me</h2>   
            <p>Software Engineering student at Condordia University. 
            <br/>Passionate about building stuff.</p>
            <div className="lang-container">
               {[...icons.keys()].map(i => 
                <div key={`${i}-about`}>
                    <LangBox lang={i}/>
                </div>)}
            </div>
        </div>
        <div className="resume-container">
            <h2 className="element-title">My Resume</h2>
            <a href="/Res_Kone_Abdoul_EN.pdf" target="blank">
                <img id="resume-img" src={resume} />
            </a>
        </div>    
    </section>
    )
}