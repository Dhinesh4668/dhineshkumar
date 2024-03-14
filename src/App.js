import React from 'react'
import HomeScreen from './Screens/HomeScreen'
import {Route, Routes, Link} from 'react-router-dom'

const App = () =>{
  return(
     <React.Fragment>
      <Routes>
        <Route path='/' element={<HomeScreen />}/>
      </Routes>
     </React.Fragment>
  )
}

export default App
