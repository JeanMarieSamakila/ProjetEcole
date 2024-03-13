
import './App.css'
import Body from './Body'

import Footer from './Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import Resultat from './Resultat'
import Login from './Login'
import Inscription from './Inscription'
import Section from './Section'
// import Suivant from './Suivant'



function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Resultat' element={<Resultat />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Inscription' element={<Inscription />} />
          <Route path='/Section' element={<Section />} />
          {/* <Route path='/Suivant' element={<Suivant />} /> */}

        </Routes>
        <Footer />
      </BrowserRouter>



    </>
  )
}

export default App
