import React, { useState } from 'react'
import { Container } from './styles'
import {ReactComponent as BurguerIcon } from '../../assets/burger.svg'
import {ReactComponent  as PizzaIcon } from '../../assets/pizza.svg'
import {ReactComponent as SodaPopIcon } from '../../assets/soda.svg'
import {ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'
import menuImg from '../../assets/menu.svg'
import { NavLink } from 'react-router-dom'

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () =>{
    setMenuOpen(!menuOpen);
  }
  return (
    <Container isMenuOpen={menuOpen}>
      <button type="button" onClick={handleToggleMenu}>
        <img src={menuImg} alt="imagem do menu" />
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              <BurguerIcon/>
              <span>Hamburg</span>
            </NavLink>
          </li>
          <li>
            <NavLink  to='pizzas' >
              <PizzaIcon/>
              <span>Pizza</span>
            </ NavLink>
          </li>
          <li>
            <NavLink to='bebidas'>
              <SodaPopIcon/>
              <span>Bebidas</span>
            </ NavLink>
          </li>
          <li>
            <NavLink to='sorvetes' >
              <IceCreamIcon/>
              <span>Sorvetes</span>
            </ NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
