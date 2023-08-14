import { Link } from 'gatsby';
import React from 'react';
import { navigationLinks } from '../../utils/navigations';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center container py-8 flex-wrap">
            <div className="flex">
                <span className='rounded-full bg-primary text-white w-[53px] h-[53px] flex-center text-[25px] font-bold'>K</span>
                <p className='text-white ms-4 h-[53px] max-w-[80px] font-bold'>Kinka Finance</p>
            </div>
            <div className="flex">
                {navigationLinks.map(navigationLink => (
                    <Link key={navigationLink.pathName} className='text-white opacity-60 ms-12 md:block hidden' to={navigationLink.pathName}>{navigationLink.name}</Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;