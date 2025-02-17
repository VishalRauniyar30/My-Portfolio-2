import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Tooltip } from 'react-tooltip'

import { client, urlFor } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'
import './SkillsStyles.scss'

const Skills = () => {
    const [experiences, setExperiences] = useState([])
    const [skills, setSkills] = useState([])

    useEffect(() => {
        const query = '*[_type == "experiences"]'
        const skillsQuery = '*[_type ==  "skills"]'

        client.fetch(query).then((data) => setExperiences(data))

        client.fetch(skillsQuery).then((data) => setSkills(data))
    }, [])


    return (
        <>
            <h2 className="head-text">
                Skills & Achievements
            </h2>   
            <div className="app__skills-container">
                <motion.div className='app__skills-list'>
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{ opacity : [0, 1] }}
                            transition={{ duration : 0.5 }}
                            className='app__skills-item app__flex'
                            key={skill.name}
                        >
                            <div className='app__flex' style={{ backgroundColor : skill.bgColor }}>
                                <img src={urlFor(skill.icon)} alt={skill.name} />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className="app__skills-exp">
                    {experiences.map((experience) => (
                        <motion.div className='app__skills-exp-item' key={experience.year}>
                            <div className="app__skills-exp-year">
                                <p className="bold-text">
                                    {experience.year}
                                </p>
                            </div>
                            <motion.div className='app__skills-exp-works'>
                                {experience.works.map((work) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity : [0, 1] }}
                                            transition={{ duration : 0.5 }}
                                            className='app__skills-exp-work'
                                            data-tooltip-id={work.name}
                                            key={work.name}
                                        >
                                            <h4 className="bold-text">{work.name}</h4>
                                            <p className="p-text">{work.company}</p>
                                        </motion.div>
                                        <Tooltip 
                                            id={work.name}
                                            place='top'
                                            content={work.desc}
                                            className='skills-tooltip'
                                            arrowColor='#fff'
                                        />
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__whitebg'
)