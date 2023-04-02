import React from 'react'
import { Footer, Information, Main, Navbar } from './components'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {

  return (
  <BrowserRouter>
    <div className="bg-primary w-full overflow-hidden h-full">
      <div className="flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full ">
          <Navbar />
        </div>
      </div>
      <Routes>
          <Route path="/" exact element={<Navigate to={"/fishes"} />} />
          <Route path="/fishes" exact element={<Main />} />
          <Route path="/fishes/filter" exact element={<Main />} />
          <Route path="/info/:id" exact element={<Information />} />
      </Routes> 
      <div>
        <Footer />
      </div>
    </div>
  </BrowserRouter>
  )
}

export default App;
