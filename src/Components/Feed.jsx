
import { useEffect, useState } from 'react'
import {  THESIDEBARS, TheVedios} from '../Utils/Importing'
import { fetchApi } from '../Utils/Fetchpart'





const Feed = () => {


                              let [vediox,setvediox] = useState([])     
                              let [select, setSelect] = useState('New')   
                              
                                useEffect(() => {
                                      fetchApi(`search?part=snippet&q=${select}`)
                                      .then((data) => setvediox(data.items))
                                },[select])
  return (
    <div>   
                        <main className='flex-col flex md:flex-row '>
                                   <div className="h-auto md:h-[92vh] border-r-2 border-slate-600 sm:px-0 md:p-2 bg-black">
                                   <THESIDEBARS displayname = {select} setDisplayName = {setSelect}/>
                                   </div>   
                                   <div className="p-2 overflow-y-auto h-[92vh] w-full flex-2 ">
                                        <h1  className='clamps'><span className='text-red-500'>{select}</span> Vedios</h1>
                                          <TheVedios videos = {vediox}/>  
                                   </div>
                        </main>
    </div>
  )
}

export default Feed
