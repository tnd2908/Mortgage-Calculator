import React from 'react';
export type IntroBlock = {
    title?: string,
    description?: string,
    icon?: string 
}
const IntroBlockItem = ({ item } : { item: IntroBlock}) => {
    
    return (
        <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
            <div className='bg-white px-8 py-[60px] shadow-lg flex-center flex-col'>
                <img className='bg-primary rounded-full w-[100px] h-[100px] p-6' src={item.icon} alt="" />
                <h6 className='text-[30px] font-bold my-10'>{item.title}</h6>
                <p className='text-[#5F626B] text-center max-w-[276px]'>{item.description}</p>
            </div>
        </div>
    );
};

export default IntroBlockItem;