import { defineStore } from 'pinia'
import * as api from '../api/api.js'
import mockData from "@/api/mocks/mocks.js"

const API_BASE_URL = 'http://localhost:4000';

export const useGameStore = defineStore('games', {
  state: () => ({
    games:[{
      id: 0,
      date:"YYYY-MM-DDTHH:MM:SS+00:00",
      time:"11:00",
      timestamp: 1697281200,
      timezone:"UTC",
      status:{
          long: "Finished",
          short: "FT"
      },
      teams: {
          home: {
              id: 255,
              name: "Cascais",
              logo: "https://media-4.api-sports.io/rugby/teams/255.png",
              lineups:{
                  starting:[
                      {
                          id:0,
                          name:"John Doe",
                          nationality:"PT"
                      }
                  ],
                  substitutes:[
                      {
                          id:1,
                          name:"John Doe",
                          nationality:"PT"
                      }
                  ]
              }
          },
          away: {
              id: 256,
              name: "Direito",
              logo: "https://media-4.api-sports.io/rugby/teams/256.png",
              lineups:{
                  starting:[
                      {
                          id:2,
                          name:"John Doe",
                          nationality:"PT"
                      }
                  ],
                  substitutes:[
                      {
                          id:3,
                          name:"John Doe",
                          nationality:"PT"
                      }
                  ]
              }
          }
          
      },
      scores: {
          home: 21,
          away: 21
      },
      periods: {
          first: {
              home: 5,
              away: 15
          },
          second: {
              home: 16,
              away: 6
          },
          overtime: {
              home: null,
              away: null
          },
          second_overtime: {
                  home: null,
                  away: null
          }
      },
      summary: [
          {
              minute:7,
              type:"Try",
              player:"Cristiano Ronaldo",
              period:"first",
              homeTeam: true
          }
      ],
      statistics:{
          tries:{
              home:0,
              away:0
          },
          convertedGoals:{
              home:0,
              away:0
          },
          convertedAttempts:{
              home:0,
              away:0
          },
          penalties:{
              home:0,
              away:0
          },
          penaltiesAttemps:{
              home:0,
              away:0
          },
          goalsPercentage:{
              home:0,
              away:0
          },
          droppedGoals:{
              home:0,
              away:0
          },
          droppedGoalAttempts:{
              home:0,
              away:0
          },
          yellowCards:{
              home:0,
              away:0
          }
      }
  }], 
    currentGameId:0
  }),
getters: {
    getGames: (state) => state.games,
    getGame: (state) => (gameId) => state.games.find(game => game.id == gameId),
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
    changeCurrentGameId(newId){
      this.currentGameId = +newId
    }
  },
})