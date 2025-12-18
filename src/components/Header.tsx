import "./header.css";

interface HeaderLink {
    text: string;
    link: string;
}

export default function Header() {

    const headerPages:HeaderLink[] = [
        {text:"ABOUT", link:"#about"}, 
        {text:"PROJECTS", link:"#projects"}, 
        {text:"CONTACT", link:"#contact"}, 
    ]; 

    return(
        <header id="header" className="header">
            <div className="page-title"> ABDOUL KONE </div>
            <nav className="header-pages">
                {headerPages.map(p => 
                    <a key={p.link} href={p.link}>
                        <div className="title">{p.text}</div>
                    </a>
                )}
            </nav>    
        </header>
    )
}