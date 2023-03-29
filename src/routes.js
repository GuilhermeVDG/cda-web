import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import QuemSomos from './pages/QuemSomos';
import AreaDeAtuacao from './pages/AreasDeAtuacao';
import Resultados from './pages/Resultados';

export default function RoutesApp(){
  return(
    <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/quemsomos" element={ <QuemSomos/> } />
        <Route path="/areasdeatuacao" element={ <AreaDeAtuacao/> } />
        <Route path="/resultados" element={ <Resultados/> } />
      </Routes>
    </BrowserRouter>
  );
}