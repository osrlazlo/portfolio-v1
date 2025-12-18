import { type ReactElement } from "react";
import { projects } from "./projectList"
import type { Project } from "./projectList"
import "./projects.css"
import { DiGithubBadge, } from "react-icons/di";
import { BiLinkAlt } from "react-icons/bi";
import { icons } from "./icons";
 
let isLeft = true;
projects.map(p => {
        p.isLeft = isLeft;
        isLeft = !isLeft;
    });

export default function Projects() {   

    return(
        <section id="projects" className="body-container">
            <h2 className="section-title">My Projects</h2>   
            <div className="projects-container">
               {projects.map((p) => 
                    p.isLeft ?
                    <div key={p.title}>
                        <ProjectCard project={p}/>
                    </div>:
                    <div key={p.title}>
                        <ProjectCardRight project={p}/>
                    </div>
                    )}
            </div>    
        </section>
    )
}

interface ProjectCardProps {
    project: Project;
}

function ProjectCard({project}:ProjectCardProps) {
    return(
        <div className="project-card-container">
            <ProjectImg imgLink={project.imgLink}/>
            <ProjectInfo project={project}/>
        </div>
    )
}

function ProjectCardRight({project}:ProjectCardProps) {
    return(
        <div className="project-card-container">
            <ProjectInfo project={project}/>
            <ProjectImg imgLink={project.imgLink}/>
        </div>
    )
}

//project img
interface ProjectImgProps {
    imgLink?:string
}

function ProjectImg({imgLink}:ProjectImgProps) {
    return(
        <div className="project-img-container">
                <img src={imgLink}/>
        </div>
    )
}

//project links
interface ProjectLinkProps {
    link?:string;
    icon:ReactElement;
    name:string;
}

function ProjectLink({link, icon, name}:ProjectLinkProps) {
    return(
        <>
        {link ? 
            <div className="bg-up">
                <div className="bg-down">
                    <a target="blank" href={link}>{name} 
                        <div className="header-icon">
                            {icon}
                        </div>
                    </a>
                </div> 
            </div>:""}
        </>
    )
}

//project info
function ProjectInfo({project}:ProjectCardProps) {
    return(
        <div className="project-info-container">
            <div className="project-header">
                <div className="project-title">
                    <h3>{project.title}</h3>     
                </div> 
                <ProjectLink link={project.gitLink} name="GitHub" icon={<DiGithubBadge/>}/>
                <ProjectLink link={project.website} name="Website" icon={<BiLinkAlt/>}/>
            </div>

            <div className="project-subheader">
                <h4>{`${project.type} Project - ${project.year}`}</h4>  
            </div>

            <span>{project.desc}</span>
            
            <div className="project-lang">
                {project.lang.map(l => <div key={`${l}-proj`}><LangBox lang={l}/></div>)}
            </div>
            
        </div>
    )
}

//lang box
interface LanBoxProps {
    lang:string;
}
export function LangBox({lang}:LanBoxProps) {
    return(
        <div className="lang-box">
            <div className="icon-container"> 
                {icons.get(lang)}
            </div>
            <p className="text">{lang}</p>
        </div>
    )
} 

