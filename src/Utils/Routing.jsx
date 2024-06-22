import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Overview from '../Components/Home/Overview'
import Usage from '../Components/Home/Usage'
import TimeLine from '../Components/Home/TimeLine'
import Plays from '../Components/Home/Plays'
import CustomerJourney from '../Components/Home/CustomerJourney'


const Routing = () => {
  return (
    <Routes>
       {/* <Route path='/' element={<Overview />} /> */}
        <Route path='/Overview' element={<Overview /> }/>
        <Route path='/Usage' element={<Usage />} />
        <Route path='/TimeLine' element={<TimeLine />} />
        <Route path='/plays' element={<Plays />} />
        <Route path='/CustomerJourney' element={<CustomerJourney />} />
        {/* <Route path="*" element={<Plays />} /> */}
    </Routes>

  )
}

export default Routing