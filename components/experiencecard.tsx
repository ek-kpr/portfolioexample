import { urlFor } from '@/sanity';
import { Experience } from '@/typings';
import { motion } from 'framer-motion';
import React from 'react';

type Props = { experience: Experience };

export default function experiencecard({ experience }: Props) {
    return (
        <article
            className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] 
    snap-center p-10 bg-gray-300/50 dark:bg-gray-900/50 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] object-cover object-center"
                src={urlFor(experience.companyImage).url()}
                alt=""
            />
            <div className="px-0 md:px-10 items-center text-center">
                <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
                <p className="font-bold text-2xl mt-1">{experience.company}</p>
                <div className="flex space-x-4 my-2 p-4">
                    {experience.technologies.map((technology) => (
                        <img
                            key={technology._id}
                            className="h-10 w-10 rounded-full"
                            src={urlFor(technology.image).url()}
                            alt="{technology.title}"
                        />
                    ))}
                </div>

                <p className="uppercase py-5">
                    {new Date(experience.dateStarted).toDateString()} -{' '}
                    {experience.isCurrentlyWorkingHere
                        ? 'Present'
                        : new Date(experience.dateEnded).toDateString()}
                </p>
                <ul className="space-y-4- ml-5 text-lg">
                    {experience.points.map((point, i) => (
                        <li key={i} className="text-sm">
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
