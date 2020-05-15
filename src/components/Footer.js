import React from 'react';
import '../App.css';
import styled from 'styled-components';

const FooterComponent = styled.footer`
background-color: #fafafa;
padding-right: 1.5rem;
padding-left: 1.5rem;
min-height: 5vh;
display: flex;
flex-direction: column;
font-size: 10px;
justify-content: center;
`;

const FooterComp = styled.footer`
text-align: center !important;
`;

function Footer() {
  return (
    <FooterComponent>
    <FooterComp>
      <p>
        <strong>Educarpincho</strong> by Unlam.
      </p>
    </FooterComp>
  </FooterComponent>
  )
}

export default Footer;