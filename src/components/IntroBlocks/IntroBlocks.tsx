import React from 'react';
import IntroBlockItem, { IntroBlock } from './IntroBlockItem';

const IntroBlocks = ({ introBlocks } : { introBlocks: IntroBlock[]}) => {
    return (
        <section className='container min-h-screen flex flex-col items-center justify-center py-12 lg:px-0 px-4'>
            <h1 className='lg:text-[60px] md:text-5xl text-4xl font-bold mb-12 max-w-[679px] text-center'>High Quality Output, Awesome Service</h1>
            <div className="flex flex-wrap justify-center w-full mt-4">
                {introBlocks.map(block => (
                    <IntroBlockItem key={block.title} item={block} />
                ))}
            </div>
        </section>
    );
};

export default IntroBlocks;