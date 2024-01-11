import { defineStore } from 'pinia'
import * as api from '../api/api.js'
import mockData from "@/api/mocks/mocks.js"

const API_BASE_URL = 'http://localhost:4000';

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
    async fetchGames() {
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
