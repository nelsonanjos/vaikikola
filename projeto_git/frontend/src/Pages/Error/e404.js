import React from 'react';
import Img from "../../Assets/Img/erro-404.jpg";

export default function Error() {
  return (
    <>
        <img class="erro-404" src={Img} alt="error-404"></img>
        <h1 class="erro-404">404</h1>
        <p class="erro-404">Página não encontrada</p>
    </>
  );
}