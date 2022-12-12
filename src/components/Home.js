import React from "react";
import Pharma1 from "./../assets/pharma1.jpeg";
import Pharma2 from "./../assets/pharma2.jpg";
import { 
    slideInRight, slideInLeft } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    slideInRight: {
    animationName: 
    slideInRight,
    animationDuration: '2s'
  },
  slideInLeft: {
    animationName: 
    slideInLeft,
    animationDuration: '2s'
  }
})
const Home = () => {
  return (
    <>
    <div className="fundo">
    <div className="fundoEsquerda" >
      <h1 className={css(styles.slideInRight)}>Teste de texto 1</h1>
    </div>
      <img src={Pharma1} className="imagemFundo" />

    </div>
      <div className="fundoDireita">
        <h1 className={css(styles.slideInLeft)}>Teste de texto 2</h1>
      </div>
      <img src={Pharma2} className="imagemFundo" />
      <div className={css(styles.slideInLeft)}>Example</div>
      {/* <div
        className="fundoTeste"
        style={{ backgroundImage: `url(${Pharma1})` }}
      ></div> */}
      {/* <div className="fundoTeste" style={{backgroundImage: `url(${Pharma2})` }}></div> */}
    </>
  );
};

export default Home;
