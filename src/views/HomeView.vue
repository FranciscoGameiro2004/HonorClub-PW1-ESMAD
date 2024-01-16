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

    <div class="image-text" @click="logout">
      <img src="../assets/small-elements/avatar.png" alt="Image"/>
      <p class="loggedUser">Olá, {{ loggedUser }}!</p>
    </div>
  </div>

  <div class="carrossel">
      <img src="../assets/elements/home-image.png" alt="Carrossel Image">
      <h2>Direito conquista 12.º título de campeão nacional</h2>
      <p>O Direito conquistou este sábado o 12.º título de campeão português de râguebi do seu historial,<br> ao vencer o Cascais por 31-23, na final da Divisão de Honra do campeonato português, disputada no Jamor.</p>
    </div>

    <!-- Jogos em Destaque -->
    <div class="game-section">
      <h2 class="game-section-title">Jogos em Destaque</h2>
      <!-- Game Cards -->
      <div class="game-cards">
        <!-- Game Card 1 -->
        <div class="game-card">
          <h3>Terminado</h3>
          <hr>
          <div class="team-info">
            <div class="team-a">
              <img src="../assets/small-elements/benfica.png" alt="Benfica Image">
              <h4>Benfica</h4>
            </div>
            <div class="game-details">
              <h2>34 - 34</h2>
              <h4>20 - 10</h4>
              <h4>14 - 24</h4>
              <h5>10-12-2023 às 14:00</h5>
            </div>
            <div class="team-b">
              <img src="../assets/small-elements/agronomia.png" alt="Agronomia Image">
              <h4>Agronomia</h4>
            </div>
          </div>
        </div>
        <!-- Game Card 2 -->
        <div class="game-card">
          <h3>Terminado</h3>
          <hr>
          <div class="team-info">
            <div class="team-a">
              <img src="../assets/small-elements/CDUP.png" alt="CDUP Image">
              <h4>CDUP</h4>
            </div>
            <div class="game-details">
              <h2>21 - 50</h2>
              <h4>10 - 30</h4>
              <h4>11 - 20</h4>
              <h5>09-12-2023 às 16:00</h5>
            </div>
            <div class="team-b">
              <img src="../assets/small-elements/CDUL.png" alt="CDUL Image">
              <h4>CDUL</h4>
            </div>
          </div>
        </div>

        <!-- Game Card 3-->
        <div class="game-card">
          <h3>Terminado</h3>
          <hr>
          <div class="team-info">
            <div class="team-a">
              <img src="../assets/small-elements/belenenses.png" alt="Belenenses Image">
              <h4>Os Belenenses</h4>
            </div>
            <div class="game-details">
              <h2>30 - 17</h2>
              <h4>15 - 8</h4>
              <h4>15 - 9</h4>
              <h5>09-12-2023 às 14:00</h5>
            </div>
            <div class="team-b">
              <img src="../assets/small-elements/direito.png" alt="Direito Image">
              <h4>Direito</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Notícias em Destaque -->
    <div class="news-section">
      <h2>Notícias em Destaque</h2>
      <!-- News Boxes -->
      <div class="news-boxes">
        <!-- Box 1 -->
        <div class="news-box">
          <div class="box-up">
            <img src="../assets/elements/news-box1.png" alt="News Image 1">
          </div>
          <div class="box-down">
            <h4>Caldas Rugby Clube perde com o Técnico</h4>
            <p>A assembleia geral (AG) da Federação Portuguesa de Râguebi (FPR) aprovou esta quarta-feira uma proposta de reintegração do Técnico na Divisão de Honra, mas que condiciona a readmissão à retirada de todos os processos movidos pelo clube em tribunal.</p>
          </div>
        </div>

        <!-- Box 2 -->
        <div class="news-box">
          <div class="box-up">
            <img src="../assets/elements/news-box2.png" alt="News Image 1">
          </div>
          <div class="box-down">
            <h4>Caldas Rugby Clube perde com o Técnico</h4>
            <p>Obrigado a inverter a segunda jornada do Campeonato Nacional da 1ª Divisão, uma vez que o seu campo continua indisponível, o Caldas Rugby Clube apresentou-se na noite da passada sexta-feira no Campo das Olaias, em Lisboa, para disputar a 2ª jornada da Fase de Apuramento, frente ao Técnico.</p>
          </div>
        </div>
        
        <!-- Box 3 -->
        <div class="news-box">
          <div class="box-up">
            <img src="../assets/elements/news-box3.png" alt="News Image 1">
          </div>
          <div class="box-down">
            <h4>Benfica perdeu frente ao Belenenses</h4>
            <p>Na estreia na edição 2023/24 do Campeonato Nacional da Divisão de Honra, a equipa de râguebi do Benfica sofreu um desaire ante o Belenenses, neste sábado, 21 de outubro, no terreno adversário.</p>
          </div>
        </div>

        <!-- Box 4 -->
        <div class="news-box">
          <div class="box-up">
            <img src="../assets/elements/news-box4.png" alt="News Image 1">
          </div>
          <div class="box-down">
            <h4>Rugby Club da Lousã comemora 50 anos </h4>
            <p>O Rugby Club da Lousã (RCL) vai comemorar 50 anos de actividade, no sábado, com um 'jantar de gala' que será presidido pela ministra-adjunta e dos Assuntos Parlamentares, Ana Catarina Mendes.</p>
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

.carrossel {
  text-align: center;
}

.carrossel img {
  margin-top: 45px;
  width: 60%;
  filter: brightness(40%);
}

.carrossel h2 {
  display: flex;
  position: absolute;
  top: 38%;
  left: 27%;
  font-family: 'K2D-SemiBold', sans-serif;
  color: #D4D6E3;
}

.carrossel p {
  display: flex;
  position: absolute;
  top: 44%;
  left: 27%;
  color: #D4D6E3;
  font-family: 'Baloo2-Regular', sans-serif;
  text-align: left;
}

.game-section {
  margin-top: 15px;
  padding: 20px;
  background-color: #D4D6E3;
}

.game-section-title {
  font-family: 'K2D-ExtraBold', sans-serif;
  font-size: 25px;
  color: #2C4130;
}

.game-cards {
  display: flex;
  justify-content: space-between;
}

.game-card {
  border: 3px solid #2C4130;
  width: 375px;
  background-color: #D4D6E3;
  cursor: pointer;
}

.game-card h3 {
  margin-bottom: 10px;
  font-family: 'Baloo2-Medium', sans-serif;
  font-size: 19px;
  color: #2C4130;
}

.game-card hr {
  border: none;
  border-top: 3px solid #2C4130;
  margin-bottom: 10px;
}

.team-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.team-info h2 {
  font-family: 'Baloo2-Regular', sans-serif;
  color: #2C4130;
}

.team-info h4 {
  font-family: 'Baloo2-Regular', sans-serif;
  color: #2C4130;
}

.team-info h5 {
  font-family: 'Baloo2-Regular', sans-serif;
  color: #2C4130;
}

.team-a {
  width: 30%;
  text-align: center;
}
.team-b {
  width: 30%;
  text-align: center;
}

.team-a img {
  max-width: 100px;
}
.team-b img {
  max-width: 100px;
}

.game-details {
  width: 50%;
  text-align: center;
}

.game-details h5 {
  margin-top: 10px;
  text-align: center;
  font-family: 'Baloo2-Regular', sans-serif;
  color: #2C4130;
}

.news-section {
  margin-top: 20px;
  padding: 20px;
  background-color: #D4D6E3;
}

.news-section h2 {
  font-family: 'K2D-ExtraBold', sans-serif;
  color: #2C4130;
  font-size: 25px;
  margin-bottom: 10px;
}

.news-boxes {
  display: flex;
  position: relative;
  flex-wrap: wrap;
}

.news-box {
  width: calc(25% - 20px);
  margin: 0 20px 20px 0;
  height: 365px;
  border: 3px solid #2C4130;
  box-sizing: border-box;
  margin-right: 20px;
}

.box-up {
  height: 40%;
}
.box-up img {
  width: 100%;
  height: 100%;
}

.box-down {
  height: 60%;
  box-sizing: border-box;
}

.box-down h4 {
  display: flex;
  position: relative;
  left: 1%;
  font-family: 'K2D-SemiBold', sans-serif;
  color: #2C4130;
  font-size: 17px;
}

.box-down p {
  display: flex;
  position: relative;
  left: 1%;
  font-family: 'Baloo2-Regular', sans-serif;
  color: #2C4130;
  font-size: 14px;
}
</style>