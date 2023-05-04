import React from 'react'
import s from './About.module.scss'
import Transition from '../../components/Transition/Transition'
import { motion } from "framer-motion"
import Withgetpath from '../../HOCS/Withgetpath'


const About = (props) => {

  return (
    <> 
    <motion.div initial={{visibility: 'hidden'}} animate={{visibility: 'visible', transition: {delay: 2}}} exit={{opacity: 1, transition: {delay: 2}}}>
      <div className="container">
        <div className={s.about}>
          <div className={s.text_wrap}>
          <h3 className={s.title}>About me</h3>
          <div className={s.main_text}>I'm <span className={s.popup_text}><span>Daniel Gerchik</span></span>, a front end developer who is always looking to improve his code and make more impressive websites. You can always contact me in any way you want and I will be happy to cooperate and have new projects</div>
          <h4 className={s.label}>Technology Stack</h4>
          <div className={s.stack_items}>
            <div className={s.item}>
            <span className={s.name}>HTML</span>
              <span className={s.description}>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</span>
            </div>
            <div className={s.item}>
            <span className={s.name}>CSS</span>
              <span className={s.description}>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</span>
            </div>
            <div className={s.item}>
            <span className={s.name}>SASS</span>
              <span className={s.description}>Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called "the indented syntax," uses a syntax similar to Haml.</span>
            </div>
            <div className={s.item}>
            <span className={s.name}>JAVASCRIPT</span>
              <span className={s.description}>JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</span>
            </div>
            <div className={s.item}>
            <span className={s.name}>TYPESCRIPT</span>
              <span className={s.description}>TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.</span>
            </div>
            <div className={s.item}>
            <span className={s.name}>REACT</span>
              <span className={s.description}>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.</span>
            </div>
            <div className={s.item}>
            <span className={s.name}>NEXT</span>
              <span className={s.description}>Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.</span>
            </div>
            <div className={s.item}>
            <span className={s.name}>GIT</span>
              <span className={s.description}>Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.</span>
            </div>
            <div className={s.item}>
            <span className={s.name}>NPM</span>
              <span className={s.description}>Npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.</span>
            </div>
            <div className={s.item}>
            <span className={s.name}>GULP</span>
              <span className={s.description}>Gulp is an open-source JavaScript toolkit created by Eric Schoffstall used as a streaming build system in front-end web development</span>
            </div>
            <div className={s.item}>
            <span className={s.name}>OCTOBER CMS</span>
              <span className={s.description}>October is a self-hosted content management system (CMS) based on the PHP programming language and Laravel web application framework. It supports MySQL, SQLite and PostgreSQL for the database backend and uses a flat file database for the front end structure.</span>
            </div>
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