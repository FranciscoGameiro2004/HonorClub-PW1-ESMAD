import { defineStore } from 'pinia'

export const useGameStore = defineStore('games', {
  state: () => ({
    games:[], 
    currentGameId:0
  }),
getters: {
    getGames: (state) => state.games,
    getGame: (state) => gameId => state.find(game, game.id == gameId)
  },
  actions: {
    // TODO: ADICIONAR ACTIONS DE BUSCA ATRAVÉS DA API DEPOIS DE SER FEITO OS MOCKS NECESSÁRIOS
    async fetchGame() {
      try {
        const data = await api.get(API_BASE_URL, 'game');
        this.games = data;
        //console.log(this.games);
      } catch (error) {
        console.error(`Error in store fetching objects:`, error);
        throw error
      }
    },
  },
})
