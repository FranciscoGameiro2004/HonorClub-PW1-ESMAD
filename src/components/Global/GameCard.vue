<template>
    <div class="game-card">
    <h3>Terminado</h3>
    <hr>
    <div class="team-info">
      <div class="team-a">
        <img src="https://placehold.co/100x100" alt="Equipa A">
        <h4>Equipa A</h4>
      </div>
      <div class="game-details">
        <h2>NN - NN</h2>
        <h4>NN - NN</h4>
        <h5>DD-MM-AAAA às HH:MM</h5>
      </div>
      <div class="team-b">
        <img src="https://placehold.co/100x100" alt="Equipa B">
        <h4>Equipa B</h4>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.game-card {
  border: 1px solid #2C4130;
  padding: 20px;
  width: 375px;
  margin: 20px auto;
  background-color: #D4D6E3;
}

h3 {
  margin-bottom: 10px;
}

hr {
  border: none;
  border-top: 1px solid #2C4130;
  margin-bottom: 10px;
}

.team-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.team-a,
.team-b {
  width: 30%; /* Adjust the width of team sections */
  text-align: center;
}

.team-a img,
.team-b img {
  max-width: 100px; /* Adjust image size as needed */
}

.game-details {
  width: 50%; /* Adjust the width of game details section */
  text-align: center;
}

.game-details h5 {
  margin-top: 10px;
  text-align: center;
}
</style>