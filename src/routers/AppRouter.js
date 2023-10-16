import React from 'react'
import NavBar from '../componentes/UI/NavBar'
import Genero from '../componentes/generos/Genero'
import { Route, Routes } from 'react-router-dom'
import Director from '../componentes/director/Director'
import Productora from '../componentes/productoras/Productora'
import Tipo from '../componentes/tipos/Tipos'
import Media from '../componentes/medias/Medias'
import NotFound from '../componentes/UI/Notfound'
import Footer from '../componentes/UI/Footer'

export default function AppRouter() {
  return (
    <div>
      <NavBar />
      <div className='container'>
      <Routes>
        <Route path='/' element={<Genero />}/>
        <Route path='/directores' element={<Director />}/>
        <Route path='/productoras' element={<Productora />}/>
        <Route path='/tipos' element={<Tipo />}/>
        <Route path='/peliculas-series' element={<Media />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      </div>
      <Footer />
    </div>
  )
}
