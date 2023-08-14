import React from 'react';
import { footerData } from '../../utils/navigations';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faFacebookF, faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className='container py-[140px] xl:px-0 px-6 flex flex-wrap md:w-full justify-between'>
            <div className="lg:w-1/2 w-full mb-12">
                <div className="flex">
                    <span className='rounded-full bg-[#16222D] text-white w-[53px] h-[53px] flex-center text-[25px] font-bold'>K</span>
                    <p className='ms-6 h-[53px] max-w-[80px] font-bold'>Kinka Finance</p>
                </div>
                <p className='text-[#585C65] my-12 max-w-[371px]'>2021 Award winning Finance Advisor and Lorem ipsum dolor sit amet</p>
                <div className="flex space-x-6">
                    <Link to='/' className='w-[50px] h-[50px] flex-center text-white bg-primary rounded-full text-2xl'>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </Link>
                    <Link to='/' className='w-[50px] h-[50px] flex-center text-white bg-primary rounded-full text-2xl'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link to='/' className='w-[50px] h-[50px] flex-center text-white bg-primary rounded-full text-2xl'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </div>
            </div>
            <div className="lg:w-1/2 flex flex-wrap w-full">
                {footerData.map(e => (
                    <div key={e.title} className='md:w-1/3 sm:w-1/2 w-full lg:mb-0 mb-6'>
                        <h6 className='font-extrabold mb-8 text-xl'>{e.title}</h6>
                        {e.children.map(link => (
                            <Link key={link.name} className='block lg:my-6 my-3 text-[#70737C]' to={link.pathName}>{link.name}</Link>
                        ))}
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;