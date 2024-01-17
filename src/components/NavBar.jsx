import { ShoppingCart } from '@mui/icons-material'
import { Badge } from "@mui/material"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CarritoContext } from '../context/CarritoContext'

export const NavBar = () => {

    const { listaCompras } = useContext(CarritoContext)

    const [modoOscuro, setModoOscuro] = useState(false);
    const htmlElementRef = useRef(document.documentElement);

    const toggleModoOscuro = () => {
        setModoOscuro((prevModoOscuro) => !prevModoOscuro);
    };

    useEffect(() => {
        htmlElementRef.current.setAttribute('data-bs-theme', modoOscuro ? 'dark' : 'light');
    }, [modoOscuro]);


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id='inicio'>
                <div className="container-fluid">
                    <NavLink to='/' className="navbar-brand" href="#">TinchoStore</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/productos' className="nav-link active" aria-current="page" href="#">Productos</NavLink>
                            </li>
                        </ul>
                        <span style={{marginRight:'5px',cursor:'pointer'}} onClick={() => toggleModoOscuro()}>{modoOscuro ? '☀️' : '🌑'}</span>
                        <NavLink to='/carrito'>
                            <Badge badgeContent={listaCompras.length} color="secondary">
                                <ShoppingCart color={modoOscuro? 'light': 'action'} />
                            </Badge>
                        </NavLink>
                    </div>
                </div>
            </nav></>
    )
}
