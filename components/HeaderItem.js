import React from 'react'

function HeaderItem({title,Icon}) {
    return (
        <div className = 'flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white hover:animate-bounce'>
           <Icon className = 'h-8 mb-2'></Icon>
           <h1 className = 'tracking-widest opacity-0 group-hover:opacity-100'>{title}</h1> 
        </div>
    )
}

export default HeaderItem
