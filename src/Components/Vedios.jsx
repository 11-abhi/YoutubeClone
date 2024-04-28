import React from 'react'
import { TheCards, TheVedios } from '../Utils/Importing'


const Vedios = ({videos}) => {

            if(!videos?.length) return 'loading...'
  return (
                <div className="grids">
                    {videos.map((items,idx) => (
                        <div key={idx} className="">
                                {items.id.videoId && <TheCards cards = {items}/>}
                        </div>
                    ))}
                </div>
  )
}

export default Vedios
