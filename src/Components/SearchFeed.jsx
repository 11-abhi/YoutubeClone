

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchApi } from "../Utils/Fetchpart"
import { TheVedios } from "../Utils/Importing"



const SearchFeed = () => {
               let [vedio,setvedio] = useState([])
               const {searcTerm} = useParams

               useEffect(() => {
                    fetchApi(`search?part=snippet&q=${searcTerm}`)
                    .then((data) => setvedio(data.items))
               },[searcTerm])
  return (
                <>  
                    <div className="p-2 overflow-y-auto h-[90vh] flex-1 bg-black">
                        <h1 className='text-slate-200 font-bold clamps'>Search result for <span className='text-[#f31503]'>{searcTerm}</span>Videos</h1>
                        <TheVedios  videos={vedio}/>
                    </div>
                </>
  )
}

export default SearchFeed
