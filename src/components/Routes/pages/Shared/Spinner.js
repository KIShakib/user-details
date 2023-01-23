import React from 'react';

const Spinner = () => {
    return (
        <div className='flex'>
            <div className='w-16 h-16 border-[2px] border-dotted border-cyan-400 rounded-full animate-spin'>
                <div className='w-14 h-14 border-[2px] border-dotted border-cyan-400 rounded-full animate-spin'>
                    <div className='w-12 h-12 border-[2px] border-dotted border-cyan-400 rounded-full animate-spin'>
                        <div className='w-10 h-10 border-[2px] border-dotted border-cyan-400 rounded-full animate-spin'>
                            <div className='w-8 h-8 border-[2px] border-dotted border-cyan-400 rounded-full animate-spin'>
                                <div className='w-6 h-6 border-[2px] border-dotted border-cyan-400 rounded-full animate-spin'>
                                    <div className='w-4 h-4 border-[2px] border-dotted border-cyan-400 rounded-full animate-spin'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;