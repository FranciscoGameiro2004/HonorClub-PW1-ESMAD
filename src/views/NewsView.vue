<template>
  <div>
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

      <div class="image-text" @click="logout">
        <img src="../assets/small-elements/avatar.png" alt="Image"/>
        <p class="loggedUser">Olá, {{ loggedUser }}!</p>
      </div>
    </div>

    <div class="news-section">
      <h1 class="title">Notícias</h1>
      <div class="news-boxes">
        <div class="news-box">
          <div class="box-left">
            <img src="../assets/elements/news-box1.png" alt="news-image">
          </div>
          <div class="box-right">
            <h2>Reintegração do Técnico aprovada</h2>
            <p>A assembleia geral (AG) da Federação Portuguesa de Râguebi (FPR) aprovou esta quarta-feira uma proposta de reintegração do Técnico na Divisão de Honra, mas que condiciona a readmissão à retirada de todos os processos movidos pelo clube em tribunal.</p>
          </div>
        </div>
        <div class="news-box">
          <div class="box-left">
            <img src="../assets/elements/news-box2.png" alt="news-image">
          </div>
          <div class="box-right">
            <h2>Direito conquista 12.º título de campeão nacional</h2>
            <p>O Direito conquistou este sábado o 12.º título de campeão português de râguebi do seu historial, ao vencer o Cascais por 31-23, na final da Divisão de Honra do campeonato português, disputada no Jamor.</p>
          </div>
        </div>
        <div class="news-box">
          <div class="box-left">
            <img src="../assets/elements/news-box3.png" alt="news-image">
          </div>
          <div class="box-right">
            <h2>Caldas Rugby Clube perde com o Técnico</h2>
            <p>O Caldas Rugby Clube apresentou-se na noite da passada sexta-feira no Campo das Olaias, em Lisboa, para disputar a 2ª jornada da Fase de Apuramento, frente ao Técnico.</p>
          </div>
        </div>
        <div class="news-box">
          <div class="box-left">
            <img src="../assets/elements/news-box4.png" alt="news-image">
          </div>
          <div class="box-right">
            <h2>Rugby Club da Lousã comemora 50 anos de atividade com jantar de gala</h2>
            <p>O Rugby Club da Lousã (RCL) vai comemorar 50 anos de actividade, no sábado, com um ‘jantar de gala’ que será presidido pela ministra-adjunta e dos Assuntos Parlamentares, Ana Catarina Mendes.</p>
          </div>
        </div>
        <div class="news-box">
          <div class="box-left">
            <img src="../assets/elements/news-box5.png" alt="news-image">
          </div>
          <div class="box-right">
            <h2>Benfica perdeu frente ao Belenenses</h2>
            <p>Na estreia na edição 2023/24 do Campeonato Nacional da Divisão de Honra, a equipa de râguebi do Benfica sofreu um desaire ante o Belenenses, neste sábado, 21 de outubro, no terreno adversário.</p>
          </div>
        </div>
        <div class="news-box">
          <div class="box-left">
            <img src="../assets/elements/news-box6.png" alt="news-image">
          </div>
          <div class="box-right">
            <h2>Cascais e Direito disputam final</h2>
            <p>A final está prevista para o próximo fim de semana, em data, hora e local ainda por anunciar pela Federação Portuguesa de Râguebi.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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

.image-text {
  display: flex;
  align-items: center;
  color: #D4D6E3;
  cursor: pointer;
}

.image-text img {
  max-width: 30px;
  margin-right: 7px;
}

.loggedUser {
  white-space: nowrap;
  margin-right: 60px;
}

.title {
  display: flex;
  position: absolute;
  top: 10%;
  font-family: 'K2D-ExtraBold', sans-serif;
  font-size: 37px;
}

.news-section {
  margin-top: 20px;
  padding: 20px;
  background-color: #D4D6E3;
}

.news-boxes {
  display: flex;
  position: relative;
  left: 2%;
  margin-top: 6%;
  flex-wrap: wrap;
}

.news-box {
  width: calc(50% - 20px);
  margin: 0 10px 20px 0;
  height: 150px;
  border: 3px solid #2C4130;
  box-sizing: border-box;
  display: flex;
}

.box-left {
  width: 40%;
}
.box-left img {
  width: 100%;
  height: 100%;
}

.box-right {
  width: 60%;
  padding: 10px;
  box-sizing: border-box;
}

.box-right h2 {
  display: inline;
  position: relative;
  font-family: 'K2D-SemiBold', sans-serif;
  font-size: 18px;
  margin-bottom: 10px;
}

.box-right p {
  font-family: 'Baloo2-Regular', sans-serif;
  font-size: 12px;
}
</style>