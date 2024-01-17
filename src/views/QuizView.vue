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

  <div class="quiz-section">
      <div class="quiz-titles">
        <h1>Quiz - Final</h1>
        <h1>1/1</h1>
      </div>

      <div class="quiz-image">
        <img src="../assets/elements/quiz-image.png" alt="Quiz Image" />
      </div>

      <div class="quiz-question">
        <h2>Que equipa conquistou o título de Campeão Nacional?</h2>
      </div>

      <div class="answers">
        <div class="answer-column">
          <button @click="checkAnswer('Os Belenenses')">Os Belenenses</button>
          <button @click="checkAnswer('São Miguel')">São Miguel</button>
        </div>
        <div class="answer-column">
          <button @click="checkAnswer('Direito')">Direito</button>
          <button @click="checkAnswer('Cascais')">Cascais</button>
        </div>
      </div>
    </div>
</template>

<script>
import router from '@/router'
import { RouterLink, RouterView } from 'vue-router'
    export default {
        data() {
            return {
                loggedUser: sessionStorage.getItem('loggedUser') || '',
                selectedAnswer: null
            }
        },
        methods: {
          checkAnswer(answer) {
            if (answer === 'Direito') {
              alert('Correct answer!')
              router.push('/home')
            } else {
              alert('Wrong answer!')
            }
          },
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

.image-text:hover {
  text-decoration: underline;
}

.image-text img {
  max-width: 30px;
  margin-right: 7px;
}

.loggedUser {
  white-space: nowrap;
  margin-right: 60px;
}

.quiz-section {
  margin-top: 20px;
  padding: 20px;
  background-color: #D4D6E3;
}

.quiz-titles {
  font-family: 'K2D-ExtraBold', sans-serif;
  display: flex;
  justify-content: space-between;
}

.quiz-image {
  margin-top: 20px;
  text-align: center;
}

.quiz-image img {
  height: 100%;
  width: 100%;
}

.quiz-question {
  display: flex;
  position: relative;
  left: 20%;
  font-family: 'K2D-SemiBold', sans-serif;
  color: #2C4130;
  font-size: 20px;
  margin-top: 30px;
}

.answers {
  display: flex;
  justify-content: center;
  align-items: center;
}

.answer-column {
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}

button {
  width: 160px;
  margin: 40px 50px 0px 50px;
  height: 45px;
  border: 3px solid #2C4130;
  box-sizing: border-box;
  font-family: 'K2D-SemiBold', sans-serif;
  color: #2C4130;
  font-size: 20px;
  text-align: center;
}

</style>