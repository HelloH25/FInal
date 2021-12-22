
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Registration from '../components/graphql/Mutations/Registro'

import PublicLayout from '../layouts/PublicLayout'

import Profile from "../page/admin/Profile"
import Proyectos from "../page/admin/Proyectos"
import Usuarios from "../page/admin/Usuarios"
import Index from '../page/public/Index'




const Rutas = () => {
    return (

        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/Registro' element={<Registration/>}/>
            <Route path="/" element={<PublicLayout />}>
                <Route path='/Proyectos' element={<Proyectos />} />
                <Route path='/Usuarios' element={<Usuarios />} />
                <Route path='/Profile' element={<Profile />} />
            </Route>
        </Routes>

    )
}

export default Rutas