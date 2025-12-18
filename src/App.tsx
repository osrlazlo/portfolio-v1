
import Header from './components/Header'
import './App.css'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useEffect } from 'react'

function App() {
  //scrollspy
  let section = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  useEffect(() => {
    section = document.querySelectorAll("section");
    navLinks = document.querySelectorAll("header nav a");
  }, [])

  //console.log(section);
  //console.log(navLinks);

  window.onscroll = () => {
    section.forEach(s => {
      let id = s.getAttribute("id");
      let height = s.offsetHeight;
      let top = window.scrollY;
      let offset =  s.offsetTop - 150;

      /*if (id == "contact") {
        console.log("id", id);
        console.log("top", top+window.innerHeight-height+5);
        console.log("offset", offset+height);
        console.log("height", height);
      }*/
      
      if (id == "contact" && top+window.innerHeight-height+6 >= offset+height) {
        
        navLinks.forEach(l => {
          l.classList.remove("active");
          document.querySelector(`header nav a[href*=${id}]`)?.classList.add("active");
        })
      }
      else if ( id != "contact" && top >= offset && top < offset + height) {
        //console.log("id", id);
        navLinks.forEach(l => {
          l.classList.remove("active");
          document.querySelector(`header nav a[href*=${id}]`)?.classList.add("active");
        })
      }
    })
  }

  return (
    <>
    <Header/>
    <div className='page-body'>
        <About/>
        <Projects/>
    </div>
    <footer>
      <Contact/>
      Abdoul Kone &copy; {new Date().getFullYear()}
    </footer>    
    </>
  )
}

export default App




