import React from 'react'
import brand from '../resource/brand.png'
export default function Appbar() {
    return (
        <nav className='h-20 bg-slate-900 md:px-8 px-1'>
            <div className='h-full flex items-end'>
                <img className='h-full translate-y-2' src={brand} />
                <h1 className='text-3xl text-white md:block hidden'>AnimeHead</h1>
            </div>
        <div></div>
        </nav>
    )
}


// s | ns