import { SiGithub, SiLinkedin } from "react-icons/si"
import { TbMail, /*TbPhoneCall*/ } from "react-icons/tb"
import "./contact.css"

export default function Contact() {

    const me = {
        email: "abdko2324@gmail.com",
        //phone: "+1-438-938-0747",
        github: "https://github.com/osrlazlo",
        linkedin: "https://www.linkedin.com/in/abdoul-kone-a23a94353/",
    }

    return(
        <section id="contact" className="body-container">
            <h3 className="section-title">Contact</h3>   
            <div className="contact-container">
                <div className="info-container">
                    <a href={`mailto:${me.email}`}>
                        <div className="text">
                            <div className="icon-container">
                                <TbMail/>
                            </div>
                            {me.email} 
                        </div>
                    </a>

                    {/*<div className="text">
                        <div className="icon-container"><TbPhoneCall/></div>
                        {me.phone}
                    </div>*/}
                </div>

                <div className="info-container">
                    <a href={me.github}>
                        <div className="icon-container"><SiGithub/></div>
                    </a>
                    <a href={me.linkedin}>
                        <div className="icon-container"><SiLinkedin/></div>
                    </a>
                </div>
            </div>
        </section>
    )
}