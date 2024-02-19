import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Analytics from './Pages/Analytics';
import CommunityPage from './Pages/Communities';
import DiseaseAwareness from './Pages/DiseaseAwareness';
import Location from './Pages/Location';
import Login from './Pages/Login';
import PersonlizedDiet from './Pages/PersonlizedDiet';
import Signup from './Pages/Signup';
import Prediction from './Pages/Prediction';
import YogaPage from './Pages/Yoga/frontend/src/YogaPage';
import Yoga from './Pages/Yoga/frontend/src/pages/Yoga/Yoga';
import Tutorials from './Pages/Yoga/frontend/src/pages/Tutorials/Tutorials';




const App = () => {
  
  
  
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          
          {/* Pages */}
          <Route path="/" element={<Home />} />
          
          <Route path="/Home" element={<Home />} />
          
          
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/analytics" element={<Analytics/>}/>
          <Route path="/communities" element={<CommunityPage/>}/>
          <Route path="/diseaseAwareness" element={<DiseaseAwareness/>}/>
          <Route path="/locations" element={<Location/>}/>
          <Route path="/login" element={<Login  />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/personlizedDiet" element={<PersonlizedDiet/>}/>
          <Route path="/prediction" element={<Prediction/>}/>
          <Route path="/yoga" element={<YogaPage/>}/>
          <Route path='/start' element={<Yoga />} />
          <Route path='/tutorials' element={<Tutorials />} />


          
          
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App