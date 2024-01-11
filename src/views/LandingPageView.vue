<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
}
</script>

<template>
  <div class="navbar">
    <router-link to="/">
      <div class="logo">
        <img src="../assets/logo.png" alt="Logo" />
      </div>
    </router-link>

    <div class="auth">
      <router-link to="/login" class="login">Iniciar sessão</router-link>
      <router-link to="/register" class="register">Criar Conta</router-link>
    </div>
  </div>

  <div class="upper-container">
    <div class="text-container-1">
        <h1 class="title-1">O clube de fãs do râguebi português</h1>
        <p class="text-1">Aprenda como funciona o râguebi e acompanhe a Divisão de Honra do país dos "lobos"!</p>
    </div>
    <div class="image-1">
      <img src="../assets/upperContainer.png" alt="background"/>
    </div>
  </div>

  <div class="middle-container-1">
    <div class="text-container-2">
        <h1 class="title-2">Sobre nós</h1>
        <p class="text-2">Desenvolvemos esta dashboard em tempo real para ofereçer cobertura detalhada da Liga de Honra. O nosso objetivo é proporcionar aos fãs de râguebi uma ferramenta acessível e dinâmica para acompanhar de perto os jogos, equipas e desempenhos na liga.</p>
    </div>
    <div class="image-2">
      <img src="../assets/middleContainer1.png" alt="background"/>
    </div>
  </div>

  <div class="middle-container-2">
    <div class="text-container-3">
      <h1 class="title-3">Porquê Honor Club?</h1>
    </div>
    <div class="image-3">
      <img src="../assets/middleContainer2.png" alt="background"/>
    </div>
  </div>

  <div class="bottom-container">
    <div class="text-container-4">
      <h1 class="title-4">Estás à espera do quê? <br> JOIN THE CLUB</h1>
      <router-link to="/register" class="register-button">Criar Conta</router-link>
    </div>
    <div class="image-4">
      <img src="../assets/lowerContainer.png" alt="background"/>
    </div>
  </div>

</template>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2C4130;
  color: #D4D6E3;
  z-index: 10;
}

.logo img {
  max-width: 140px;
  height: auto;
  margin-left: 25px;
  margin-top: 5px;
}

.auth {
  display: flex;
  align-items: center;
  color: #D4D6E3;
  margin-right: 20px;
  gap: 5px;
}

.login {
  color: #D4D6E3;
  background-color: transparent;
  font-family: 'Baloo2-Medium', sans-serif;
}

.register {
  color: #2C4130;
  background-color: #FBCE9D;
  font-family: 'Baloo2-Medium', sans-serif;
}

.login:hover {
  background-color: transparent;
  text-decoration: underline;
}

.register:hover {
  color: #FBCE9D;
  background-color: #2C4130;
  border: 1px solid #FBCE9D;
}

.upper-container {
  width: 100%;
  height: 100%;
}

.text-container-1 {
  display: flex;
  position: absolute;
  top: 15%;
  z-index: 0;
}

.title-1 {
  color: #D4D6E3;
  font-family: 'K2D-SemiBold', sans-serif;
  font-size: 70px;
  margin-right: 900px;
}

.text-1 {
  display: flex;
  position: absolute;
  top: 110%;
  color: #D4D6E3;
  font-family: 'Baloo2-Medium', sans-serif;
  font-size: 20px;
  margin-right: 850px;
}

.image-1 img {
  display: flex;
  position: absolute;
  top: 7%;
  left: 0%;
  width: 100%;
  height: 94%;
  z-index: -1;
  object-fit: cover;
}

.middle-container-1 {
  width: 100%;
  height: 100%;
}

.text-container-2 {
  display: flex;
  position: absolute;
  z-index: 0;
  top: 130%;
  left: 50%;
}

.title-2 {
  display: flex;
  position: absolute;
  top: -80%;
  left: 35%;
  color: #2C4130;
  font-family: 'K2D-SemiBold', sans-serif;
  font-size: 70px;
}

.text-2 {
  color: #2C4130;
  font-family: 'Baloo2-Regular', sans-serif;
  font-size: 20px;
  text-align: center;
  margin-top: 50px;
}

.image-2 img {
  display: flex;
  position: absolute;
  top: 101%;
  left: 0%;
  width: 100%;
  height: 94%;
  z-index: -1;
  object-fit: cover;
}

.middle-container-2 {
  width: 100%;
  height: 100%;
}

.text-container-3 {
  display: flex;
  position: absolute;
  z-index: 0;
  top: 200%;
}

.title-3 {
  display: flex;
  position: relative;
  left: -9%;
  color: #D4D6E3;
  font-family: 'K2D-SemiBold', sans-serif;
  font-size: 70px;
}

.image-3 img {
  display: flex;
  position: absolute;
  top: 195%;
  left: 0%;
  width: 100%;
  height: 130%;
  z-index: -1;
  object-fit: cover;
}

.bottom-container {
  width: 100%;
  height: 100%;
}

.text-container-4 {
  display: flex;
  position: absolute;
  top: 355%;
  left: 5%;
  z-index: 0;
}

.title-4 {
  color: #2C4130;
  font-family: 'K2D-Bold', sans-serif;
  font-size: 60px;
  text-align: center;
}

.register-button {
  display: flex;
  position: absolute;
  top: 100%;
  left: 33%;
  background-color: #623504;
  color: #D4D6E3;
  font-family: 'Baloo2-Medium', sans-serif;
  font-size: 20px;
  padding: 2% 10% 2% 10%;
  margin-top: 20px;
}

.register-button:hover {
  background-color: #D4D6E3;
  color: #623504;
  border: 1px solid #623504;
}

.image-4 img {
  display: flex;
  position: absolute;
  top: 325%;
  left: 0%;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
}

</style>