import { Experience } from '@/typings';
import { motion } from 'framer-motion';
import React from 'react';
import Experiencecard from './experiencecard';

type Props = {
    experiences: Experience[];
};

export default function workexperience({ experiences }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=" h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly pt-24 text-center mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                experience
            </h3>
            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-orange-600">
                {experiences?.map((experience) => (
                    <Experiencecard
                        key={experience._id}
                        experience={experience}
                    />
                ))}
            </div>
        </motion.div>
    );
}
