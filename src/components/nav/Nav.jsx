import React from 'react'
import './nav.css';
import {BiHomeAlt2} from 'react-icons/bi';
import {BiUser} from 'react-icons/bi';
import {BiBookAlt} from 'react-icons/bi';
import {GrReactjs} from 'react-icons/gr';
import {BiMessageSquareDetail} from 'react-icons/bi';
import { useState } from 'react';
export const Nav = () => {
  const [active, setActive] = useState('#');

  return (
    <nav>
      <a href="#" onClick={()=>setActive('#') } className={active==='#'?'active':''}><BiHomeAlt2/></a>
      <a href="#about" onClick={()=>setActive('#about') } className={active==='#about'?'active':''}><BiUser/></a>
      <a href="#experiance" onClick={()=>setActive('#experiance') } className={active==='#experiance'?'active':''}><BiBookAlt/></a>
      <a href="#portfolio" onClick={()=>setActive('#portfolio') } className={active==='#portfolio'?'active':''}><GrReactjs/></a>
      <a href="#footer" onClick={()=>setActive('#contact') } className={active==='#contact'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}
