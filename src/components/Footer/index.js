import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/rgflix.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="Logo" src={Logo} alt="rgflix" />
      </a>
      <p>
        © 2020 Rômulo Guedes
        {' '}
        
      </p>
    </FooterBase>
  );
}

export default Footer;
