import React from 'react';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
export type HeroModel = {
    imageUrl?: string,
    title?: string,
    description?: string,
    button?: string,
}
const Hero = ({ hero }: { hero: HeroModel }) => {
    return (
        <section
            className='bg-cover bg-no-repeat md:bg-center bg-left flex flex-col justify-between min-h-screen 2xl:px-0 px-6'
            style={{ backgroundImage: `url(${hero.imageUrl})` }}>
            <Navbar />
            <div className='container'>
                <motion.h1
                    className='lg:text-[62px] text-5xl lg:leading-[80px] leading-[60px] font-extrabold text-white max-w-[546px]'
                    initial={{ scale: 0, rotateZ: 180 }}
                    animate={{ scale: 1, rotateZ: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}>
                    {hero.title}
                </motion.h1>

                <motion.p
                    className='opacity-80 max-w-[410px] text-white my-8'
                    initial={{ translateX: '300px', opacity: 0 }}
                    animate={{ translateX: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}>
                    {hero.description}
                </motion.p>
                <motion.button
                    className='bg-primary text-white px-12 py-5 font-bold'
                    initial={{ translateY: '300px', opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    {hero.button}
                </motion.button>
            </div>
            <div></div>
        </section>
    );
};

export default Hero;