import React from 'react';
import './App.css';

import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import dadosIniciais from './data/dados_iniciais.json';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Desenvolvimento web front-end é a prática de converter dados em uma interface gráfica, através do uso de HTML, CSS e JavaScript, para que os usuários possam visualizar e interagir com esses dados."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]} />

      <Carousel
        category={dadosIniciais.categorias[2]} />

      <Carousel
        category={dadosIniciais.categorias[3]} />

      <Carousel
        category={dadosIniciais.categorias[4]} />

      <Footer />

    </div>
  );
}

export default App;
