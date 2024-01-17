<script>
import { RouterLink, RouterView } from 'vue-router'
    export default {
        data() {
            return {
                loggedUser: sessionStorage.getItem('loggedUser') || '',
            }
        },
        methods: {
          logout() {
            alert('Logging out...');
            this.$router.push('/');
            sessionStorage.removeItem('loggedUser')
          },
        },
    }
</script>

<template>
    <div class="navbar">
  <router-link to="/home">
    <div class="logo">
      <img src="../assets/small-elements/logo.png" alt="Logo" />
    </div>
  </router-link>

    <div class="nav-links">
      <router-link to="/games">Jogos</router-link>
      <router-link to="/news">Notícias</router-link>
      <router-link to="/rules">Regras</router-link>
      <router-link to="/quiz">Quiz</router-link>
    </div>

    <div class="nav-right" @click="logout">
      <img src="../assets/small-elements/avatar.png" alt="Image"/>
      <p class="loggedUser">Olá, {{ loggedUser }}!</p>
    </div>
  </div>

  <div class="rules-section">
      <h1 class="title">Regras</h1>
      <!-- Jogadas e Pontuação -->
      <div class="container">
        <h2 class="subtitle">Jogadas e Pontuação</h2>
        <div class="rule-boxes">
          <!-- Box 1 -->
          <div class="rule-box">
            <div class="box-up">
              <img src="../assets/elements/regras1.jpg" alt="news-image">
            </div>
            <div class="box-down">
              <h3>Try</h3>
            </div>
          </div>
          <!-- Box 2 -->
          <div class="rule-box">
            <div class="box-up">
              <img src="../assets/elements/regras2.jpg" alt="news-image">
            </div>
            <div class="box-down">
              <h3>Conversão</h3>
            </div>
          </div>
          <!-- Box 3 -->
          <div class="rule-box">
            <div class="box-up">
              <img src="../assets/elements/regras3.jpg" alt="news-image">
            </div>
            <div class="box-down">
              <h3>Penalidade</h3>
            </div>
          </div>
          <!-- Box 4 -->
          <div class="rule-box">
            <div class="box-up">
              <img src="../assets/elements/regras4.jpg" alt="news-image">
            </div>
            <div class="box-down">
              <h3>Drop Goal</h3>
            </div>
          </div>
        </div>
      </div>
      <!-- Posições -->
      <div class="container">
        <h2 class="subtitle">Posições</h2>
        <div class="rule-boxes">
          <!-- Box 1 -->
          <div class="rule-box">
            <div class="box-up">
              <img src="../assets/elements/regras5.jpg" alt="news-image">
            </div>
            <div class="box-down">
              <h3>Pilar</h3>
            </div>
          </div>
          <!-- Box 2 -->
          <div class="rule-box">
            <div class="box-up">
              <img src="../assets/elements/regras6.jpg" alt="news-image">
            </div>
            <div class="box-down">
              <h3>Hooker</h3>
            </div>
          </div>
          <!-- Box 3 -->
          <div class="rule-box">
            <div class="box-up">
              <img src="../assets/elements/regras7.jpg" alt="news-image">
            </div>
            <div class="box-down">
              <h3>Segunda Linha</h3>
            </div>
          </div>
          <!-- Box 4 -->
          <div class="rule-box">
            <div class="box-up">
              <img src="../assets/elements/regras8.jpg" alt="news-image">
            </div>
            <div class="box-down">
              <h3>Asa</h3>
            </div>
          </div>
        </div>
      </div>
      <!-- Linhas de Campo -->
      <div class="container">
        <h2 class="subtitle">Linhas de Campo</h2>
        <div class="rule-boxes">
          <!-- Box 1 -->
          <div class="rule-box">
            <div class="box-up">
              <img src="../assets/elements/regras9.jpg" alt="news-image">
            </div>
            <div class="box-down">
              <h3>Linha de meio campo</h3>
            </div>
          </div>
          <!-- Box 2 -->
          <div class="rule-box">
            <div class="box-up">
              <img src="../assets/elements/regras10.jpg" alt="news-image">
            </div>
            <div class="box-down">
              <h3>Linha de 10 metros</h3>
            </div>
          </div>
          <!-- Box 3 -->
          <div class="rule-box">
            <div class="box-up">
              <img src="../assets/elements/regras11.jpg" alt="news-image">
            </div>
            <div class="box-down">
              <h3>Linhas de 22 metros</h3>
            </div>
          </div>
          <!-- Box 4 -->
          <div class="rule-box">
            <div class="box-up">
              <img src="../assets/elements/regras12.jpg" alt="news-image">
            </div>
            <div class="box-down">
              <h3>Linha de bola morta</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
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
}

.logo img {
  max-width: 140px;
  height: auto;
  margin-left: 25px;
  margin-top: 5px;
}

.nav-links {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  color: #D4D6E3;
}

.nav-links a {
  margin: 0 10px;
  color: #D4D6E3;
}

.nav-right {
  display: flex;
  align-items: center;
  color: #D4D6E3;
  cursor: pointer;
}

.nav-right:hover {
  text-decoration: underline;
}

.nav-right img {
  max-width: 30px;
  margin-right: 7px;
}

.loggedUser {
  white-space: nowrap;
  margin-right: 60px;
}

.rules-section {
  margin-top: 30px;
  padding: 20px;
  background-color: #D4D6E3;
}

.title {
  display: flex;
  position: absolute;
  top: 7%;
  font-family: 'K2D-ExtraBold', sans-serif;
  font-size: 37px;
}

.container {
  margin-top: 20px;
}

.subtitle {
  display: flex;
  position: relative;
  left: 2%;
  font-family: 'K2D-SemiBold', sans-serif;
  margin-bottom: 2px;
}

.rule-boxes {
  display: flex;
  position: relative;
  left: 2%;
  flex-wrap: wrap;
}

.rule-box {
  width: calc(25% - 20px); /* Adjust the width and margin as needed */
  margin: 0 10px 20px 0;
  height: 150px; /* Adjust the height as needed */
  border: 3px solid #2C4130;
  box-sizing: border-box;
  margin-right: 20px;
}

.box-up {
  height: 75%;
}
.box-up img {
  width: 100%;
  height: 100%;
}

.box-down {
  height: 25%;
  box-sizing: border-box;
}

.box-down h3 {
  display: flex;
  position: relative;
  left: 3%;
  font-family: 'K2D-SemiBold', sans-serif;
  font-size: 20px;
}
</style>