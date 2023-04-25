import React from 'react'
import s from './About.module.scss'
import Transition from '../../components/Transition/Transition'
import { motion } from "framer-motion"


export const About = (props) => {

  return (
    <> 
    <motion.div initial={{visibility: 'hidden'}} animate={{visibility: 'visible', transition: {delay: 2}}} exit={{opacity: 1, transition: {delay: 2}}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam eligendi sint delectus reprehenderit perferendis alias voluptatum rem explicabo veritatis possimus consequatur aut nam, voluptatem numquam animi quibusdam, perspiciatis doloribus dignissimos.
    Quisquam consequatur at asperiores repudiandae, a non perferendis laboriosam temporibus inventore fugiat iusto quaerat nesciunt dolore molestiae dolores iure ratione sint. Possimus voluptas ratione consectetur eligendi tempora distinctio maiores cupiditate.
    Reiciendis cumque vitae maiores sequi quam? Commodi, explicabo minus deleniti rem ad tempore totam voluptatibus dolorum doloremque fuga nulla delectus consectetur dignissimos iste eaque quos sequi veritatis reiciendis ab exercitationem.
    Consequatur eligendi veritatis provident consectetur neque et dolor ab commodi omnis mollitia saepe exercitationem facere cupiditate architecto minus doloremque, quisquam nisi iure aliquid eum, quod ex? Labore animi iste saepe.
    Unde voluptatibus doloremque eos dicta quo quis soluta recusandae nihil tenetur, autem sit ad labore beatae reprehenderit! Perferendis adipisci velit pariatur quam blanditiis, commodi magnam aut iusto, et asperiores consectetur.
    In ad quidem provident nam commodi autem. Tempora nemo eligendi laborum quaerat eaque cum incidunt similique maiores atque veritatis nesciunt illo dolores, amet quos libero recusandae. Repudiandae dolore autem iure.
    Aut provident pariatur, repudiandae suscipit impedit tempore cumque consequatur numquam, rem earum dignissimos repellendus error qui distinctio laboriosam eos nostrum necessitatibus. Tempora vero dolore natus, quam commodi consequatur! Veniam, placeat?
    Vero unde fuga harum. Aliquid ratione nobis accusantium totam, facilis iure sit? Facilis necessitatibus dignissimos earum laboriosam non magnam ducimus deserunt nostrum doloremque, hic ipsa delectus, molestiae qui asperiores eligendi.
    Facilis repellendus quasi necessitatibus incidunt ullam, voluptate, iusto, natus nesciunt velit id accusamus magni. Hic dignissimos dolore doloribus praesentium voluptate asperiores reprehenderit, atque laborum non temporibus quasi minima. Quas, laboriosam!
    Accusantium eaque exercitationem itaque libero error, eveniet iure nesciunt tenetur provident autem dignissimos nulla ullam molestiae magnam voluptate quod fugit, sapiente quasi tempore, similique excepturi molestias? Tenetur iure eligendi odit!</motion.div>
    <Transition/>
    </>
  )
}
