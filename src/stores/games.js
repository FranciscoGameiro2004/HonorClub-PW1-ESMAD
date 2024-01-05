import { defineStore } from 'pinia'

export const useGameStore = defineStore('games', {
  state: () => ({games:[], currentGameId:0}),
getters: {
    getGames: (state) => state.games,
    getGame: (state) => gameId => state.find(game, game.id == gameId)
  },
  actions: {
    // TODO: ADICIONAR ACTIONS DE BUSCA ATRAVÉS DA API DEPOIS DE SER FEITO OS MOCKS NECESSÁRIOS
    increment() {
      this.count++
    },
  },
})
