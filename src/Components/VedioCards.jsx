import { Link } from "react-router-dom"
import { CheckSign } from "../assets/image/image"



const VedioCards = ( {cards : {id : {videoId},snippet}} ) => {
           
  return (
            <>
                <div id="Card" className=" p-1 flex flex-col  justify-center items-center min-h-28 max-sm:h-[300px] max-sm:w-[100%]">
                            <Link to={videoId && `/vedio/${videoId}`}>
                                <div className="h-[200px] w-[100%] flex justify-center items-center">
                                    <img className="w-full h-full" src={snippet?.thumbnails?.high?.url} alt={snippet?.title} />
                                </div>
                            </Link>
                            <Link to={videoId && `/vedio${videoId}`}>
                            <h1 className="max-w-[60ch] font-bold ">{snippet?.title.slice(0,40)}</h1>
                            </Link>
                            <Link to={snippet?.channelId && `/channel/${snippet?.channelId}`}>
                            <h1 className="max-w-[60ch] font-bold text-[0.9em] flex items-center">{snippet?.channelTitle.slice(0,30)} <span><img className="h-[24px]" src={CheckSign} alt="" /></span></h1>
                            </Link>
                </div>
            </>
  )
}

export default VedioCards
 