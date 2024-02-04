import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectCard = ({name ,link ,image,tech1 , tech2 , tech3, 
    tech1img ,tech2img , tech3img ,date}) => {
  return (
    <article className='snap-center'>
        <div>
            <Link href={link} target='_blank'>
                <Image className='' width={300} height={400} src={image} alt={name}/>

            </Link>
        </div>

        <div>
            <h3>{name}</h3>
            <div className='flex'>
                <Image src={tech1img} width={30} height={40} alt={tech1}/>
                <Image src={tech2img} width={30} height={40} alt={tech2}/>
                <Image src={tech3img} width={30} height={40} alt={tech3}/>
            </div>
            <p>{date}</p>
        </div>
    </article>
  )

}

export default ProjectCard