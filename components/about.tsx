import { motion } from 'framer-motion';
import React from 'react';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    pageInfo: PageInfo;
};

export default function about({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>
            <motion.img
                initial={{ x: -200 }}
                transition={{ duration: 1.2 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                src={urlFor(pageInfo?.profilePic).url()}
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover object-top md:rounded-lg md:w-95 md:h-95 xl:rounded-lg xl:w-[350px] xl:h-[350px]"
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a{' '}
                    <span className="underline decoration-orange-600/50">
                        little
                    </span>{' '}
                    background
                </h4>
                <p className="text-base">{pageInfo.backgroundInformation}</p>
            </div>
        </motion.div>
    );
}
