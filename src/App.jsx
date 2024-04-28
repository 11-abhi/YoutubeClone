import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChennelApp, FeedApp, NavBar, SearchApp, VedioApp } from './Utils/Importing'

const App = () => {
  return (
              <>
                              <BrowserRouter>            
                 <main className='bg-black h-auto w-full relative text-slate-100'>
                  <NavBar/>
                 <Routes>
                                    <Route path='/' exact element = {<FeedApp/>}></Route>
                                    <Route path='/vedio/:id' element = {<VedioApp/>}></Route>
                                    <Route path='/channel/:id' element = {<ChennelApp/>}></Route>
                                    <Route path='/search/:searchterm' element = {<SearchApp/>}></Route>
                                  </Routes>
                 </main>
                              </BrowserRouter>
              
              </>
  )
}

export default App
