import React from 'react'
import { categories } from '../Utils/Constant'

    
const SiideBar = ({displayname , setDisplayName }) => {

  return (
            <>  
                        <section className='max-md:flex-row overflow-y-auto sm:h-auto md:h-[92%] h-[5em] flex md:flex-col items-start justify-between px-4 max-md:gap-8 gap-9'>
                                       {categories.map((items) => (
                                            <button key={items.name} onClick={() => setDisplayName(items.name)}  className={`flex max-md:flex-col gap-2 items-center md:px-5 px-5 py-[5px] rounded-full hover:bg-red-500/30 transition-colors
                                            
                                            ${items.name === 'New' && 'bg-lime-300'}`}>
                                                <span><img className='h-[24px] ' src={items.icons} alt="" /></span>
                                                <span className={`${items.name === 'New' && 'text-slate-950'} max-md:text-[0.9em] md:text-[1.125em]`}>{items.name}</span>
                                            </button>
                                       ))}
                       </section>    
            </>
  )
}

export default SiideBar
