import { useState } from 'react'
import { useRoutes } from 'react-router-dom'

import logo from './assets/logo.png'
import sena from './assets/logosena.png'

import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { Home } from './components/Pages/Home/Home'
import { Containers } from './components/Containers/Containers'


import { Header } from "./components/Layouts/Header/Header";

import { Imgs } from './components/Imgs/Imgs';
import { Navbar } from './components/Navbar/Navbar';
import { Items } from './components/Items/Items';
import { NotFound } from './components/NotFound/NotFound'
import { Name } from "./components/Name/Name";


 const AppRoutes = () => {
    let routes = useRoutes ([
      { path:"/", element: <Home />},
      { path:"/*", element: <NotFound />},
    ])
    return routes
 }

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Header>
          <div className='containerHeader'>
          <Containers style='logoAndName' >
          <Imgs img={logo} style='logo' />
          <Containers style='containerName' >
          <Name style='textHeader' content="Mari Morita" />
          <hr className='hrHeader' />
          </Containers>
          </Containers>

          <Containers style='menu'>
          <Navbar>
            <Items content="Inicio" route='/' />
            <Items content="Perfil" route='/' />
            <Items content="Proyecto" route='/' />
            <Items content="References" route='/' />
            <Items content="Experiencia" route='/' />
          </Navbar>
          </Containers>

          <Containers style='containerLogoandNets' >
            <Imgs img={sena} style= 'imgSena'/>
            <Containers style='iconsNets' >
              <FaLinkedinIn href='' />
              <FaFacebookF href='https://www.facebook.com/profile.php?id=100090621475926'target='_blak'/>
              <FaInstagram href='https://www.instagram.com/mari__m27/' target='_blak'/>
              <FaTwitter href='https://twitter.com/morita__27' target='_blak'/>
              <FaWhatsapp href='https://wa.link/ps7o0b' target='_blak'/>
            </Containers>
          </Containers>
          </div>
        </Header>
        <AppRoutes />
      </>
  )
}

export default App
