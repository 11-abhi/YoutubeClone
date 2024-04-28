import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { fetchApi } from '../Utils/Fetchpart'
import { CheckSign } from '../assets/image/image'
import { TheVedios } from '../Utils/Importing'

const Vediodets = () => {
          let [videodets,setVideodets] = useState(null)
          let [videos,setVedios] = useState(null)
        let {id} = useParams()
        useEffect(() => {
            fetchApi(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideodets(data.items[0]));

            fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setVedios(data.items))
        },[id])

        if(!videodets?.snippet) return 'loading'

        const {snippet : {title, channelid , channelTitle} , statistics : {viewCount , likeCount}} = videodets
  return (
              <>
                  <div className="min-h-[92vh]">
                    <div className="max-sm:flex-col sm:flex-col flex ">
                        <div className="flex flex-1">
                            <div className="w-full sticky top-[86px]">
                                <ReactPlayer  className = 'react-player' url={`https://www.youtube.com/watch?v=${id}`} controls/>    
                              <p className='clamps'>{title.slice(0,60)}</p>
                              <div className="flex flex-row justify-between items-center">
                              <div className="flex px-3">
                                    <p className='clamps2'>{channelTitle}</p>
                                    <img className='h-[24px]' src={CheckSign} alt="" />
                                </div>
                                <div className="flex items-center gap-4 p-4">
                                  <p className='clamps2'>{parseInt(viewCount).toLocaleString()} views</p>
                                  <p className='clamps2'>{parseInt(likeCount).toLocaleString()} likes</p>
                                </div>

                              </div>
                            
                            </div>
                        </div>
                         <div className="p-2 max-sm:py-5 sm:py-1">
                         <TheVedios videos = {videos}/>
                         </div>
                    </div>
                  </div>
              </>
  )
}

export default Vediodets
