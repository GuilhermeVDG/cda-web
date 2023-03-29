import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Header() {
 return (
  <header>
    <Link className='headerOption' to='/'>Home</Link>
    <Link className='headerOption' to='/quemsomos'>Quem Somos</Link>
    <Link className='headerOption' to='/areasdeatuacao'>Áreas de Atução</Link>
    <Link className='headerOption' to='/resultados'>Resultados</Link>
  </header>
 );
}