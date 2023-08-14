import React from 'react';
import Navbar from '../Navbar/Navbar';
export type HeroModel = {
    imageUrl?: string,
    title?: string,
    description?: string,
    button?: string,
}
const Hero = ({ hero }: { hero: HeroModel}) => { 
    return (
        <section 
            className='bg-cover bg-no-repeat md:bg-center bg-left flex flex-col justify-between min-h-screen 2xl:px-0 px-6' 
            style={{ backgroundImage: `url(${hero.imageUrl})`}}>
            <Navbar />
            <div className='container bg-dark'>
                <h1 className='lg:text-[62px] text-5xl lg:leading-[80px] leading-[60px] font-extrabold text-white max-w-[546px]'> {hero.title}</h1>
                <p className='opacity-80 max-w-[410px] text-white my-8'> {hero.description} </p>
                <button className='bg-primary text-white px-12 py-5 font-bold'>{hero.button}</button>
            </div>
            <div></div>
        </section>
    );
};

export default Hero;