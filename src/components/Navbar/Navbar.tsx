import { Link } from 'gatsby';
import React, { useState } from 'react';
import { navigationLinks } from '../../utils/navigations';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import Hamburger from 'hamburger-react';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const menuAnimation: Variants = {
        initial: {
            x: '100%'
        },
        enter: {
            x: '0%',
            transition: { duration: 0.8, ease: [0.87, 0, 0.13, 1]}
        },
        exit: {
            x: '100%',
        }
    }
    return (
        <nav className="flex justify-between items-center container py-8 flex-wrap">
            <div className="flex">
                <span className='rounded-full bg-primary text-white w-[53px] h-[53px] flex-center text-[25px] font-bold'>K</span>
                <p className='text-white ms-4 h-[53px] max-w-[80px] font-bold'>Kinka Finance</p>
            </div>
            <div className="flex min-h-[53px]">
                {navigationLinks.map(navigationLink => (
                    <Link key={navigationLink.pathName} className='text-white opacity-60 ms-12 md:block hidden' to={navigationLink.pathName}>{navigationLink.name}</Link>
                ))}

                <div className="md:hidden block fixed top-[38px] right-[20px] z-20 overflow-hidden">
                    <Hamburger color='white' toggled={isOpen} toggle={toggleMenu}></Hamburger>
                </div>
            </div>
            <AnimatePresence mode='wait'>
                {isOpen && (
                    <motion.div
                        variants={menuAnimation}
                        animate='enter'
                        exit='exit'
                        initial='initial'
                        className='fixed h-screen overflow-y-auto w-full bg-slate-900 top-0 left-0 z-10 p-8'>
                        <div className="flex mb-8">
                            <span className='rounded-full bg-primary text-white w-[53px] h-[53px] flex-center text-[25px] font-bold'>K</span>
                            <p className='text-white ms-4 h-[53px] max-w-[80px] font-bold'>Kinka Finance</p>
                        </div>
                        <hr className=' border-gray-600 mb-12' />
                        {navigationLinks.map(navigationLink => (
                            <Link key={navigationLink.pathName} className='text-white opacity-60 w-full my-8 block text-center' to={navigationLink.pathName}>{navigationLink.name}</Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;