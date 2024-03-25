import './App.css'
import Body from './Body'

import Footer from './Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import Resultat from './Resultat'
import Login from './Login'
import Inscription from './Inscription'
import Section from './Section'
<<<<<<< HEAD
import Signup from './Signup'
import Dash from '../Dash'
import Barchart from './Barchart'
=======
import Signup  from './Signup'
import PersIns  from './PersIns'
>>>>>>> b8680a45c30659a4768c22925413a9227d967d91


// Dash

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
          <Route path='/Signup' element={<Signup />} />
<<<<<<< HEAD
          <Route path='/Dash' element={<Dash />} />
          <Route path='/Barchart' element={<Barchart />} />

        </Routes>
        <Footer />
      </BrowserRouter>

=======
          <Route path='/PersIns' element={<PersIns />} />
        </Routes>
        <Footer />
      </BrowserRouter>
>>>>>>> b8680a45c30659a4768c22925413a9227d967d91
    </>
  )
}

export default App