<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
}
</script>

<template>
  <div class="navbar">
    <router-link to="/" class="logo">
      <div class="logo">
        <img src="../assets/logo.png" alt="Logo" />
      </div>
    </router-link>

    <div class="auth">
      <router-link to="/login" class="login">Iniciar sessão</router-link>
      <router-link to="/register" class="register">Criar Conta</router-link>
    </div>
  </div>

  <div class="login-container">
    <h1>Olá!</h1>
    <form @submit.prevent="login">

      <div class="label-input">
        <label for="username" class="username-label">Username:</label>
        <input type="text" id="username" v-model="username" class="username" required />
      </div>

      <div class="label-input">
        <label for="password" class="password-label">Password:</label>
        <input type="password" id="password" v-model="password" class="password" required />
      </div>

      <button type="submit">
        <router-link to="/home" class="submit">Iniciar Sessão</router-link>
      </button>
    </form>
    <p>Não tem conta? <router-link to="/register" class="register-label">Criar Conta.</router-link></p>
  </div>
</template>

<style scoped>
body, html {
  height: 100%;
  margin: 0;
}

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

.logo:hover {
  background-color: transparent;
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

h1 {
  font-family: 'Baloo2-SemiBold', sans-serif;
  font-size: 40px;
}

.login-container {
  display: flex;
  position: absolute;
  top: 30%;
  left: 37%;
  flex-direction: column
}

form {
  display: flex;
  flex-direction: column;
}

.label-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
}

.label-input label {
  font-size: 20px;
  margin-right: 8px;
}

.username-label,
.password-label {
  font-family: 'Baloo2-SemiBold', sans-serif;
  font-size: 5px;
}

input {
  padding: 8px;
  margin-bottom: 8px;
  border: none;
  width: 250px;
  background-color: #A4A4A4;
}

.password {
  font-family: 'Baloo2-Medium', sans-serif;
  display: flex;
  position: relative;
  left: 1.7%
}

button {
  display: flex;
  position: relative;
  left: 51.5%;
  height: 40px;
  width: 170px;
  background-color: #623504;
  border: none;
  cursor: pointer;
}

.submit {
  display: flex;
  position: relative;
  top: 3%;
  left: 14%;
  font-size: 20px;
  color: #D4D6E3;
}

.submit:hover {
  background-color: transparent;
}

p {
  font-family: 'Baloo2-Medium', sans-serif;
  margin-top: 15px;
  font-size: 15px;
  text-align: center;
}

.register-label {
  color: #623504;
}

.register-label:hover {
  background-color: transparent;
  text-decoration: underline;
}
</style>