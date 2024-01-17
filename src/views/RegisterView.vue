<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  methods: {
    register() {
      // Validation logic
      if (this.password !== this.confirmPassword) {
        alert('As senhas não coincidem.');
        return;
      }

      if (this.isUsernameTaken(this.username)) {
        alert('Este nome de usuário já está em uso. Por favor, escolha outro.');
        return;
      }

      if (this.isEmailTaken(this.email)) {
        alert('Este email já está em uso. Por favor, use outro.');
        return;
      }

      // Registration logic
      const userData = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

      if (existingUsers.some(user => user.username === userData.username)) {
        alert('Este nome de usuário já está em uso. Por favor, escolha outro.');
        return;
      }

      if (existingUsers.some(user => user.email === userData.email)) {
        alert('Este email já está em uso. Por favor, use outro.');
        return;
      }

      existingUsers.push(userData);

      localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

      alert("Conta criada!")
      this.$router.push('/login');
    },
    isUsernameTaken(username) {
      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      return existingUsers.some(user => user.username === username);
    },
    isEmailTaken(email) {
      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      return existingUsers.some(user => user.email === email);
    },
  },
}
</script>

<template>
  <div class="navbar">
    <router-link to="/" class="logo">
      <div class="logo">
        <img src="../assets/small-elements/logo.png" alt="Logo" />
      </div>
    </router-link>

    <div class="auth">
      <router-link to="/login" class="login">Iniciar sessão</router-link>
      <router-link to="/login" class="register">Criar Conta</router-link>
    </div>
  </div>

  <div class="register-container">
    <h1>Olá!</h1>
    <form @submit.prevent="register">

      <div class="label-input">
        <label for="username" class="username-label">Username:</label>
        <input type="text" id="username" v-model="username" class="username" required />
      </div>

      <div class="label-input">
        <label for="email" class="email-label">Email:</label>
        <input type="email" id="email" v-model="email" class="email" required />
      </div>

      <div class="label-input">
        <label for="password" class="password-label">Password:</label>
        <input type="password" id="password" v-model="password" class="password" required />
      </div>

      <div class="label-input">
        <label for="confirmPassword" class="confirm-password-label">Confirmar:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" class="confirm-password" required />
      </div>

      <button type="submit">
        <p class="submit">Criar Conta</p>
      </button>
    </form>
    <p>Se já tiver conta, <router-link to="/login" class="login-label">inicie a sessão.</router-link></p>
  </div>
</template>

<style scoped>
body, html {
  height: 100%;
  margin: 0;
  background-color: #D4D6E3
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

.register-container {
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

label {
  font-family: 'Baloo2-SemiBold', sans-serif;
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
  font-size: 20px;
}

input {
  padding: 8px;
  margin-bottom: 8px;
  border: none;
  width: 250px;
  background-color: #A4A4A4;
}

.password {
  display: flex;
  position: relative;
  left: 1.7%
}

.email {
  display: flex;
  position: relative;
  left: 12%;
}

button {
  display: flex;
  position: relative;
  left: 52%;
  height: 40px;
  width: 170px;
  background-color: #623504;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #b46108;
}

.submit {
  display: flex;
  position: relative;
  font-family: 'Baloo2-Medium', sans-serif;
  top: -25%;
  left: 20%;
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

.login-label {
  color: #623504;
}

.login-label:hover {
  background-color: transparent;
  text-decoration: underline;
}
</style>