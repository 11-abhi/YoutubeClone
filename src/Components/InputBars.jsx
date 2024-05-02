import React, { useState } from 'react'
import { CloseIcon, SearchIcon } from '../assets/image/image'
import { useNavigate } from 'react-router-dom'


const InputBars = () => {

                    let [inpval,setInp] = useState('')
                   const navigate = useNavigate()

                    let handleClick  = (e) => {
                            setInp(e.target.value)
                    }

                    const handleSubmit = (e) => {
                       e.preventDefault();

                       if(inpval){
                        navigate(`/search/${inpval}`);
                        setInp('')
                       }
                    }
                  

                    let handleCut = () => {
                           setInp('')
                    }
  return (
            <>
                             <form onSubmit={handleSubmit} className="max-sm:w-[100%] md:w-[40%] h-[auto] max-sm:justify-center flex items-center justify-end ">
        <div className="flex max-sm:w-[100%] justify-center items-center rounded-s-full bg-white  md:w-[100%] py-2 px-2 md:justify-between">
          <input
                value={inpval}
                onChange={handleClick}
            type="text"
            className="max-sm:text-[0.9em] max-sm:w-[100%] outline-none placeholder:text-slate-950 text-slate-950 max-sm:px-2 border-none"
            placeholder="Search"
          />
                    {inpval.length > 0 && <img onClick={handleCut} src={CloseIcon} alt="closeicon" />}
        </div>
        <button  type='submit' className="rounded-e-full flex items-center justify-center  bg-black h-[100%] border-l-2 border-slate-950">
                <img src={SearchIcon} alt="" />
        </button>
      </form>    
            </>
  )
}

export default InputBars
