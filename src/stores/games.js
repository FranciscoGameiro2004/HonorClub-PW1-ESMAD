import { defineStore } from 'pinia'
import * as api from '../api/api.js'

const GAMES_API_BASE_URL = 'http://localhost:5174';

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
                          position:"Position",
                          nationality:"PT"
                      }
                  ],
                  substitutes:[
                      {
                          id:1,
                          name:"John Doe",
                          position:"Position",
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
                          position:"Position",
                          nationality:"PT"
                      }
                  ],
                  substitutes:[
                      {
                          id:3,
                          name:"John Doe",
                          position:"Position",
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
          },
      ],
        statistics:[
            {
                name: 'Tries',
                home:0,
                away:0
            },
            {
                name: 'Converted Goals',
                home:0,
                away:0
            },
            {
                name: 'Converted Attempts',
                home:0,
                away:0
            },
            {
                name: 'Penalties',
                home:0,
                away:0
            },
            {
                name: 'Penalty Attempts',
                home:0,
                away:0
            },
            {
                name: 'Percentage of Goals',
                home:0,
                away:0
            },
            {
                name: 'Dropped Goals',
                home:0,
                away:0
            },
            {
                name: 'Dropped Goals Attempts',
                home:0,
                away:0
            },
            {
                name: 'Yellow Cards',
                home:0,
                away:0
            }
        ]
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
    },
    async fetchGames(){
        try {
            const data = await api.get(GAMES_API_BASE_URL, 'games')
            this.games = data.games
            console.log(data);
        } catch (error) {
            throw error
        }
    }
  },
})