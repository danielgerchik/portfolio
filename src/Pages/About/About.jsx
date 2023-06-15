import React, { useRef } from 'react'
import s from './About.module.scss'
import Transition from '../../components/Transition/Transition'
import { motion } from "framer-motion"
import Withgetpath from '../../HOCS/Withgetpath'
import StackItem from '../../components/StackItem/StackItem'


const About = (props) => {

  const bgBlobFirst = useRef(null)
  const bgBlobSecond = useRef(null)
  
  function moveBg(e) {

    let x = e.clientX / window.innerWidth
    let y = e.clientY / window.innerHeight

    bgBlobFirst.current.style.transform =  `rotate(-${y * 50}deg)` 
    bgBlobSecond.current.style.transform =  `translateY(-${y * 20}px) translateY(10%) rotate(90deg)` 

  }

  return (
    <> 
    <motion.div onMouseMove={moveBg} initial={{visibility: 'hidden'}} animate={{visibility: 'visible', transition: {delay: 2}}} exit={{opacity: 1, transition: {delay: 2}}}>
      <div className="container">
        <div className={s.about}>
          <div className={s.text_wrap}>
          <svg ref={bgBlobFirst} className={s.bg_blob} id={s.blob_1} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#000000" d="M36.9,-67.8C41.1,-61.5,33.2,-38.1,30.2,-23.9C27.1,-9.8,28.9,-4.9,28.4,-0.3C27.9,4.3,25.1,8.6,22.9,13.6C20.6,18.6,19,24.4,15.3,32.8C11.6,41.2,5.8,52.3,-5.2,61.2C-16.1,70.2,-32.3,77,-38.8,70.2C-45.4,63.5,-42.4,43.1,-37.5,29.1C-32.7,15.1,-26.1,7.6,-22.6,2C-19.2,-3.6,-19,-7.2,-19.7,-14C-20.3,-20.7,-21.8,-30.5,-18.7,-37.5C-15.5,-44.5,-7.8,-48.6,4.3,-56C16.3,-63.4,32.7,-74.2,36.9,-67.8Z" transform="translate(100 100)" />
</svg>
<svg ref={bgBlobSecond} viewBox="0 0 200 200" className={s.bg_blob} id={s.blob_2} xmlns="http://www.w3.org/2000/svg">
<path fill="#000000" d="M35.5,-44.2C43,-28,43.9,-14,46.1,2.2C48.2,18.3,51.6,36.6,44.1,41.5C36.6,46.3,18.3,37.6,2.6,35C-13,32.4,-26,35.7,-32.4,30.9C-38.7,26,-38.4,13,-36,2.3C-33.7,-8.3,-29.3,-16.7,-23,-32.9C-16.7,-49.1,-8.3,-73.2,2.8,-76C14,-78.9,28,-60.4,35.5,-44.2Z" transform="translate(100 100)" />
</svg>
          <h3 className={s.title}>About me</h3>
          <div className={s.main_text}>I'm <span className={s.popup_text}><span>Daniel Gerchik</span></span>, a front end developer who is always looking to improve his code and make more impressive websites. You can always contact me in any way you want and I will be happy to cooperate and have new projects</div>
          <h4 className={s.label}>Technology Stack</h4>
          <div className={s.stack_items}>
            <StackItem name='HTML' desc='The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.' />
            <StackItem name='CSS' desc='Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.' />
            <StackItem name='SASS' desc='Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called "the indented syntax," uses a syntax similar to Haml.' />
            <StackItem name='JAVASCRIPT' desc='JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.' />
            <StackItem name='TYPESCRIPT' desc='TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.' />
            <StackItem name='REACT' desc='React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.' />
            <StackItem name='NEXT' desc='Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.' />
            <StackItem name='GIT' desc='Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.' />
            <StackItem name='NPM' desc='Npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.' />
            <StackItem name='GULP' desc='Gulp is an open-source JavaScript toolkit created by Eric Schoffstall used as a streaming build system in front-end web development' />
            <StackItem name='OCTOBER CMS' desc='October is a self-hosted content management system (CMS) based on the PHP programming language and Laravel web application framework. It supports MySQL, SQLite and PostgreSQL for the database backend and uses a flat file database for the front end structure.' />
          </div>
          </div>
        </div>
      </div>
    </motion.div>
    <Transition currentPage= 'About' nextPage='Work'/>
    </>
  )
}

export default Withgetpath(About)