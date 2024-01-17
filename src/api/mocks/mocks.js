export default{
  games: [
    { 
      id: 1, 
      date: "2022-04-30T17:00:00+00:00",
      time: "18:00",
      timestamp:1697281200,
      timezone:"UTC",
      status:{
        long:"Finished",
        short:"FT"
      },
      teams:{
        home: {
          id:1,
          name: "Portugal",
          logo: "src/assets/flags/portugal.png",
          lineups:{
            starting:[ {
              id:1,
              name:"Elsa Santos",
              nationality:"PT"
            },{
              id:2,
              name:"Inês Marques",
              nationality:"PT"
            },{
              id:3,
              name:"Marta Magalhaes",
              nationality:"PT"
            },{
              id:4,
              name:"Joana Bordilo",
              nationality:"PT"
            },{
              id:5,
              name:"Ana Freire",
              nationality:"PT"
            },{
              id:6,
              name:"Raquel Costa",
              nationality:"PT"
            },{
              id:7,
              name:"Laura Pereira",
              nationality:"PT"
            },{
              id:8,
              name:"Sara Moreira",
              nationality:"PT"
            },{
              id:9,
              name:"Maria Vasquez",
              nationality:"PT"
            },{
              id:10,
              name:"Isabel Ozorio",
              nationality:"PT"
            },{
              id:11,
              name:"Mariana Santos",
              nationality:"PT"
            },{
              id:12,
              name:"Vera Simoes",
              nationality:"PT"
            },{
              id:13,
              name:"Mariana Marques",
              nationality:"PT"
            },{
              id:14,
              name:"Ines Spinola",
              nationality:"PT"
            },{
              id:15,
              name:"Daniela Correia",
              nationality:"PT"
            }
          ],
            substitutes:[
            {
                id:16,
                name:"Carolta Torres",
                nationality:"PT"
            },
            {
              id:17,
              name:"Beatriz Rodrigues",
              nationality:"PT"
            },
            {
              id:18,
              name:"Neuza Reis",
              nationality:"PT"
            },
            {
              id:19,
              name:"Márcia Santos",
              nationality:"PT"
            },
            {
              id:20,
              name:"Maria Teixeira",
              nationality:"PT"
            },
            {
              id:21,
              name:"Beatriz Oliveira",
              nationality:"PT"
            },
            {
              id:22,
              name:"Maria Costa",
              nationality:"PT"
            },
            {
              id:23,
              name:"Leonor Amaral",
              nationality:"PT"
            },
            ]
          },
        },
        away: {
          id:2,
          name: "Germany",
          logo: "src/assets/flags/germany.png",
          lineups: {
            starting:[
              {
                id:1,
                name:"Pia Erhart",
                nationality:"GER"
              },{
                id:2,
                name:"Tina Schuckert",
                nationality:"GER"
              },{
                id:3,
                name:"Mareike Bier",
                nationality:"GER"
              },{
                id:4,
                name:"Luise Lauter",
                nationality:"GER"
              },{
                id:5,
                name:"Muriel Weigel",
                nationality:"GER"
              },{
                id:6,
                name:"Theresa Hauth",
                nationality:"GER"
              },{
                id:7,
                name:"Svetlana Hess",
                nationality:"GER"
              },{
                id:8,
                name:"Melissa Paul",
                nationality:"GER"
              },{
                id:9,
                name:"Vivian Bahlmann",
                nationality:"GER"
              },{
                id:10,
                name:"Laura Schwinn",
                nationality:"GER"
              },{
                id:11,
                name:"Amelie Harris",
                nationality:"GER"
              },{
                id:12,
                name:"Mette Zimmat",
                nationality:"GER"
              },{
                id:13,
                name:"Anja Fischer",
                nationality:"GER"
              },{
                id:14,
                name:"Maike Drewenskus",
                nationality:"GER"
              },{
                id:15,
                name:"Steffi Gruber",
                nationality:"GER"
              }
            ],
            substitutes:[
              {
                id:16,
                name:"Michelle Henninger",
                nationality:"GER"
              },
              {
                id:17,
                name:"Meike Hedderich",
                nationality:"GER"
              },
              {
                id:18,
                name:"Romy Fisher",
                nationality:"GER"
              },
              {
                id:19,
                name:"Sophia Afflerbach",
                nationality:"GER"
              },
              {
                id:20,
                name:"Lotta Afflerbach",
                nationality:"GER"
              },
              {
                id:21,
                name:"Kristina Reinbold",
                nationality:"GER"
              },
              {
                id:22,
                name:"Johanna Hacker",
                nationality:"GER"
              },
              {
                id:23,
                name:"Maike Waibel",
                nationality:"GER"
              },
            ]
          },
        },
      },
      scores:{
        home:57,
        away:0,
      },
      periods:{
        first:{
          home:20,
          away:0
        },
        second:{
          home:37,
          away:0
        },
        overtime:{
          home:null,
          away:null
        },
        second_overtime:{
          home:null,
          away:null
        }
      },
      summary: [
        {
          minute:6,
          type:"Try",
          player:"Ines Spinola",
          period:"first",
          homeTeam:true
        }, 
        {
          minute:7,
          type:"Conversion",
          player:"Marta Magalhaes",
          period:"first",
          homeTeam:true
        },
        {
          minute:18,
          type:"Try",
          player:"Beatriz Rodrigues",
          period:"first",
          homeTeam:true
        },
        {
          minute:26,
          type:"Try",
          player:"Marta Magalhaes",
          period:"first",
          homeTeam:true
        },
        {
          minute:35,
          type:"Try",
          player:"Ana Freire",
          period:"first",
          homeTeam:true
        },
        {
          minute:36,
          type:"Conversion",
          player:"Marta Magalhaes",
          period:"first",
          homeTeam:true
        },
        {
          minute:44,
          type:"Try",
          player:"Isabel Ozorio",
          period:"first",
          homeTeam:true
        },
        {
          minute:45,
          type:"Conversion",
          player:"Inês Spinola",
          period:"first",
          homeTeam:true
        },
        {
          minute:49,
          type:"Try",
          player:"Inês Spinola",
          period:"second",
          homeTeam:true
        },
        {
          minute:50,
          type:"Conversion",
          player:"Marta Magalhaes",
          period:"second",
          homeTeam:true
        },
        {
          minute:58,
          type:"Try",
          player:"Vera Simoes",
          period:"second",
          homeTeam:true
        },
        {
          minute:59,
          type:"Conversion",
          player:"Inês Spinola",
          period:"second",
          homeTeam:true
        },
        {
          minute:71,
          type:"Try",
          player:"Raquel Costa",
          period:"second",
          homeTeam:true
        },
        {
          minute:72,
          type:"Conversion",
          player:"Maria Magalhaes",
          period:"second",
          homeTeam:true
        },
        {
          minute:83,
          type:"Try",
          player:"Neuza Reis",
          period:"second",
          homeTeam:true
        },
      ],
      statistics:{
        tries:{
          name: 'Tries',
          home:9,
          away:0
        },
        convertedGoals:{
          name: 'Converted Goals',
          home:6,
          away:0
        },
        penalties:{
          name: 'Penalties',
          home:0,
          away:0,
        },
        penaltiesAttemps:{
          name: 'Penalty Attempts',
          home:0,
          away:0
        },
        goalsPercentage:{
          name: 'Percentage of Goals',
          home:70,
          away:80
        },
        droppedGoals:{
          name: 'Dropped Goals',
          home:0,
          away:0
        },
        droppedGoalAttempts:{
          name: 'Dropped Goals Attempts',
          home:0,
          away:0
        },
        yellowCards:{
          name: 'Yellow Cards',
          home:0,
          away:0
        },
      }
    },
    { 
      id: 2, 
      date: "2023-11-04T13:50:00+00:00",
      time: "13:50",
      timestamp:1173569523,
      timezone:"UTC",
      status:{
        long:"Finished",
        short:"FT"
      },
      teams:{
        home: {
          id:3,
          name: "Ucrânia",
          logo: "src/assets/flags/ucrania.png",
          lineups:{
            starting:[ {
              id:1,
              name:"Serhii Liutyi",
              nationality:"UKR"
            },{
              id:2,
              name:"Mykola Kirsanov",
              nationality:"UKR"
            },{
              id:3,
              name:"Illia Voda",
              nationality:"UKR"
            },{
              id:4,
              name:"Daniil Korovin",
              nationality:"UKR"
            },{
              id:5,
              name:"Roman Kulakivskyi",
              nationality:"UKR"
            },{
              id:6,
              name:"Serhii Nikitin",
              nationality:"UKR"
            },{
              id:7,
              name:"Serhii Cherniachenko",
              nationality:"UKR"
            },{
              id:8,
              name:"Ruslan Radchuk",
              nationality:"UKR"
            },{
              id:9,
              name:"Andrii Bilousov",
              nationality:"UKR"
            },{
              id:10,
              name:"Mykola Derliirhiiev",
              nationality:"UKR"
            },{
              id:11,
              name:"Narek Manukyan",
              nationality:"UkR"
            },{
              id:12,
              name:"Ilhor Dziubych",
              nationality:"UKR"
            },{
              id:13,
              name:"Oleh Kosariev",
              nationality:"UKR"
            },{
              id:14,
              name:"Vadym Sivak",
              nationality:"UKR"
            },{
              id:15,
              name:"Oleksandr Berezanskyi",
              nationality:"UKR"
            }
          ],
            substitutes:[
            {
              id:16,
              name:"Andrii Kulak",
              nationality:"UKR"
            }, 
            {
              id:17,
              name:"Valentyn Porokhonchuk",
              nationality:"UKR"
            },
            {
              id:18,
              name:"Roman Marchenko",
              nationality:"UKR"
            }, 
            {
              id:19,
              name:"Oleksandr Tymchenko",
              nationality:"UKR"
            },
            {
              id:20,
              name:"Andrii Tsarevskyi",
              nationality:"UKR"
            },
            {
              id:21,
              name:"Volodymyr Voitov",
              nationality:"UKR"
            },
            {
              id:22,
              name:"Maksym Kotliarov",
              nationality:"UKR"
            },
            {
              id:23,
              name:"Denys Zakhlivnyi",
              nationality:"UKR"
            }
            ]
          },
        },
        away: {
          id:2,
          name: "Lithuania",
          logo: "src/assets/flags/lithuania.png",
          lineups: {
            starting:[
              {
                id:1,
                name:"Tautrimas Mazylis",
                nationality:"LTU"
              },{
                id:2,
                name:"Tautvydas Mazylis",
                nationality:"LTU"
              },{
                id:3,
                name:"Nojus Skinulis",
                nationality:"LTU"
              },{
                id:4,
                name:"Mindaugas Kazlauskas",
                nationality:"LTU"
              },{
                id:5,
                name:"Tomas Maciulis",
                nationality:"LTU"
              },{
                id:6,
                name:"Laurynas Marcinkus",
                nationality:"LTU"
              },{
                id:7,
                name:"Donatas Trumpickas",
                nationality:"LTU"
              },{
                id:8,
                name:"Paulius Strigunas",
                nationality:"LTU"
              },{
                id:9,
                name:"Tautvydas Krasauskas",
                nationality:"LTU"
              },{
                id:10,
                name:"Matas Miezys",
                nationality:"LTU"
              },{
                id:11,
                name:"Kestutis Karbauskas",
                nationality:"LTU"
              },{
                id:12,
                name:"Donatas Vilimavicius",
                nationality:"LTU"
              },{
                id:13,
                name:"Jonas Mikalcius",
                nationality:"LTU"
              },{
                id:14,
                name:"Domantas Baguzis",
                nationality:"LTU"
              },{
                id:15,
                name:"Pedro Soto",
                nationality:"LTU"
              }
            ],
            substitutes:[
              {
                id:16,
                name:"Andrius Zacharovas",
                nationality:"LTU"
              },
              {
                id:17,
                name:"Eimantas Grabliauskas",
                nationality:"LTU"
              },
              {
                id:18,
                name:"Daivaras Jonaitis",
                nationality:"LTU"
              },
              {
                id:19,
                name:"Ervidas Bakutis",
                nationality:"LTU"
              },
              {
                id:20,
                name:"Karolis Liaukus",
                nationality:"LTU"
              },
              {
                id:21,
                name:"Tomas Bagdonas",
                nationality:"LTU"
              },
              {
                id:22,
                name:"Mantas Butkevicius",
                nationality:"LTU"
              },
              {
                id:23,
                name:"Justinas Vasiliauskas",
                nationality:"LTU"
              },
            ]
          },
        },
      },
      scores:{
        home:14,
        away:32,
      },
      periods:{
        first:{
          home:8,
          away:18
        },
        second:{
          home:6,
          away:14
        },
        overtime:{
          home:null,
          away:null
        },
        second_overtime:{
          home:null,
          away:null
        }
      },
      summary: [
        {
          minute:9,
          type:"Penalty",
          player:"Pedro Soto",
          period:"first",
          homeTeam:false
        }, 
        {
          minute:20,
          type:"Try",
          player:"Pedro Soto",
          period:"first",
          homeTeam:false
        },
        {
          minute:29,
          type:"Try",
          player:"Domantas Baguzis",
          period:"first",
          homeTeam:false
        },
        {
          minute:30,
          type:"Conversion",
          player:"Pedro Soto",
          period:"first",
          homeTeam:false
        },
        {
          minute:35,
          type:"Yellow Card",
          player:"Kestutis Karbauskas",
          period:"first",
          homeTeam:false
        },
        {
          minute:39,
          type:"Try",
          player:"Pedro Soto",
          period:"first",
          homeTeam:false
        },
        {
          minute:40,
          type:"Conversion",
          player:"Pedro Soto",
          period:"first",
          homeTeam:false
        },
        {
          minute:46,
          type:"Try",
          player:"Serhii Nikitin",
          period:"second",
          homeTeam:true
        },
        {
          minute:47,
          type:"Conversion",
          player:"Oleh Kosariev",
          period:"second",
          homeTeam:true
        },
        {
          minute:53,
          type:"Penalty",
          player:"Pedro Soto",
          period:"second",
          homeTeam:false
        },
        {
          minute:55,
          type:"Try",
          player:"Kestutis Karbauskas",
          period:"second",
          homeTeam:false
        },
        {
          minute:55,
          type:"Conversion",
          player:"Pedro Soto",
          period:"second",
          homeTeam:false
        },
        {
          minute:71,
          type:"Yellow Card",
          player:"Tautrimas Mazylis",
          period:"second",
          homeTeam:false
        },
        {
          minute:79,
          type:"Try",
          player:"Denys Zakhlivnyi",
          period:"second",
          homeTeam:true
        },
        {
          minute:80,
          type:"Conversion",
          player:"Oleh Kosariev",
          period:"second",
          homeTeam:true
        },
      ],
      statistics:{
        tries:{
          name: 'Tries',
          home:2,
          away:4
        },
        convertedGoals:{
          name: 'Converted Goals',
          home:2,
          away:3
        },
        penalties:{
          name: 'Penalties',
          home:0,
          away:2,
        },
        penaltiesAttemps:{
          name: 'Penalty Attempts',
          home:0,
          away:2
        },
        goalsPercentage:{
          name: 'Percentage of Goals',
          home:76,
          away:88
        },
        droppedGoals:{
          name: 'Dropped Goals',
          home:0,
          away:0
        },
        droppedGoalAttempts:{
          name: 'Dropped Goals Attempts',
          home:0,
          away:0
        },
        yellowCards:{
          name: 'Yellow Cards',
          home:0,
          away:1
        },        
      }
    },
    { 
      id: 3, 
      date: "2023-11-04T15:20:00+00:00",
      time: "15:20",
      timestamp:1937325921,
      timezone:"UTC",
      status:{
        long:"Finished",
        short:"FT"
      },
      teams:{
        home: {
          id:5,
          name: "Suiça",
          logo: "src/assets/flags/suica.png",
          lineups:{
            starting:[
              {
                id:1,
                name:"Cameron Holenstein",
                nationality:"SUI"
              },{
                id:2,
                name:"Maxime Lucon",
                nationality:"SUI"
              },{
                id:3,
                name:"Vincent Vial",
                nationality:"SUI"
              },{
                id:4,
                name:"Tim Voegtli",
                nationality:"SUI"
              },{
                id:5,
                name:"Jorn Voegtli",
                nationality:"SUI"
              },{
                id:6,
                name:"Ludovic Perruisset",
                nationality:"SUI"
              },{
                id:7,
                name:"Johnatan Dallet",
                nationality:"SUI"
              },{
                id:8,
                name:"Cyril Lin",
                nationality:"SUI"
              },{
                id:9,
                name:"Gaetan Hirsch",
                nationality:"SUI"
              },{
                id:10,
                name:"Jules Porcher",
                nationality:"SUI"
              },{
                id:11,
                name:"Cyrill Fluckinger",
                nationality:"SUI"
              },{
                id:12,
                name:"Jemba Bull",
                nationality:"SUI"
              },{
                id:13,
                name:"Lucas Heinrich",
                nationality:"SUI"
              },{
                id:14,
                name:"Jolan Vincent",
                nationality:"SUI"
              },{
                id:15,
                name:"Hugo Caubet",
                nationality:"SUI"
              }
            ],
            substitutes:[
              {
                id:16,
                name:"Manu Ronza",
                nationality:"SUI"
              },
              {
                id:17,
                name:"Maximiliano Ducommun",
                nationality:"SUI"
              },
              {
                id:18,
                name:"Louis Chavanon",
                nationality:"SUI"
              },
              {
                id:19,
                name:"Joshua Byrne",
                nationality:"SUI"
              },
              {
                id:20,
                name:"Vincent Reymond",
                nationality:"SUI"
              },
              {
                id:21,
                name:"Sebastien Millet",
                nationality:"SUI"
              },
              {
                id:22,
                name:"Davide Pulimeno",
                nationality:"SUI"
              },
              {
                id:23,
                name:"Louis Pharaony",
                nationality:"SUI"
              },
            ]
          },
        },
        away: {
          id:6,
          name: "Suécia",
          logo: "src/assets/flags/suecia.png",
          lineups: {
            starting:[
              {
                id:1,
                name:"Ale Loman",
                nationality:"SUE"
              },{
                id:2,
                name:"Casper Forsberg",
                nationality:"SUE"
              },{
                id:3,
                name:"Petter Strale",
                nationality:"SUE"
              },{
                id:4,
                name:"Christopher Sidwick",
                nationality:"SUE"
              },{
                id:5,
                name:"Oscar Larsson",
                nationality:"SUE"
              },{
                id:6,
                name:"Arthur Marini",
                nationality:"SUE"
              },{
                id:7,
                name:"Sami Paulsson",
                nationality:"SUE"
              },{
                id:8,
                name:"Theodor Karlsson",
                nationality:"SUE"
              },{
                id:9,
                name:"Mattias Nilsson",
                nationality:"SUE"
              },{
                id:10,
                name:"Karl Hoade",
                nationality:"SUE"
              },{
                id:11,
                name:"Mathis De Chavaille",
                nationality:"SUE"
              },{
                id:12,
                name:"Philip Murphy",
                nationality:"SUE"
              },{
                id:13,
                name:"Axel Kalling-Smith",
                nationality:"SUE"
              },{
                id:14,
                name:"Samuel Ahlback",
                nationality:"SUE"
              },{
                id:15,
                name:"Robin Fransson",
                nationality:"SUE"
              }
            ],
            substitutes:[
              {
                id:16,
                name:"Anthony Rafael",
                nationality:"SUE"
              },
              {
                id:17,
                name:"Alexander Nahas",
                nationality:"SUE"
              },
              {
                id:18,
                name:"Viktor Cordes",
                nationality:"SUE"
              },
              {
                id:19,
                name:"Elias Granath",
                nationality:"SUE"
              },
              {
                id:20,
                name:"Philip Axelsson",
                nationality:"SUE"
              },
              {
                id:21,
                name:"Linus Ahlgren",
                nationality:"SUE"
              },
              {
                id:22,
                name:"Vaa Iuta",
                nationality:"SUE"
              },
              {
                id:23,
                name:"Tim Johansson",
                nationality:"SUE"
              },
            ]
          },
        },
      },
      scores:{
        home:23,
        away:12,
      },
      periods:{
        first:{
          home:12,
          away:5
        },
        second:{
          home:11,
          away:7
        },
        overtime:{
          home:null,
          away:null
        },
        second_overtime:{
          home:null,
          away:null
        }
      },
      summary: [
        {
          minute:22,
          type:"Penalty",
          player:"Jules Porcher",
          period:"first",
          homeTeam:true
        },
        {
          minute:23,
          type:"Try",
          player:"Cyrill Fluckinger",
          period:"first",
          homeTeam:true
        },
        {
          minute:33,
          type:"Penalty",
          player:"Jules Porcher",
          period:"first",
          homeTeam:true
        },
        {
          minute:40,
          type:"Penalty",
          player:"Jules Porcher",
          period:"first",
          homeTeam:true
        },
        {
          minute:44,
          type:"Penalty",
          player:"Jules Porcher",
          period:"first",
          homeTeam:true
        },
        {
          minute:59,
          type:"Penalty",
          player:"Jules Porcher",
          period:"second",
          homeTeam:true
        }, 
        {
          minute:63,
          type:"Try",
          player:"Samuel Ahlback",
          period:"second",
          homeTeam:false
        }, 
        {
          minute:73,
          type:"Penalty",
          player:"Jules Porcher",
          period:"second",
          homeTeam:true
        },
        {
          minute:84,
          type:"Try",
          player:"Theodor Karlsson",
          period:"second",
          homeTeam:false
        },
        {
          minute:85,
          type:"Conversion",
          player:"Mattias Nilsson",
          period:"second",
          homeTeam:false
        },   
      ],
      statistics:{
        tries:{
          name: 'Tries',
          home:1,
          away:2
        },
        convertedGoals:{
          name: 'Converted Goals',
          home:0,
          away:1
        },
        penalties:{
          name: 'Penalties',
          home:6,
          away:0,
        },
        penaltiesAttemps:{
          name: 'Penalty Attempts',
          home:6,
          away:0
        },
        goalsPercentage:{
          name: 'Percentage of Goals',
          home:89,
          away:95
        },
        droppedGoals:{
          name: 'Dropped Goals',
          home:0,
          away:0
        },
        droppedGoalAttempts:{
          name: 'Dropped Goals Attempts',
          home:0,
          away:0
        },
        yellowCards:{
          name: 'Yellow Cards',
          home:0,
          away:0
        },        
      }
    },
    { 
      id: 4, 
      date: "2023-11-18T14:20:00+00:00",
      time: "14:20",
      timestamp:1206830922,
      timezone:"UTC",
      status:{
        long:"Finished",
        short:"FT"
      },
      teams:{
        home: {
          id:7,
          name: "Croacia",
          logo: "src/assets/flags/croacia.png",
          lineups:{
            starting:[
              {
                id:1,
                name:"Daniel Mau'u",
                nationality:"CRO"
              },{
                id:2,
                name:"Martin Altamirano",
                nationality:"CRO"
              },{
                id:3,
                name:"Llija Biskic",
                nationality:"CRO"
              },{
                id:4,
                name:"Marko Buljac",
                nationality:"CRO"
              },{
                id:5,
                name:"Andrija Svagusa",
                nationality:"CRO"
              },{
                id:6,
                name:"Marko Svagusa",
                nationality:"CRO"
              },{
                id:7,
                name:"Andrija Galic",
                nationality:"CRO"
              },{
                id:8,
                name:"Ivo Peric",
                nationality:"CRO"
              },{
                id:9,
                name:"Jason Newton",
                nationality:"CRO"
              },{
                id:10,
                name:"Nik Jurisic",
                nationality:"CRO"
              },{
                id:11,
                name:"Nikola Pavlovic",
                nationality:"CRO"
              },{
                id:12,
                name:"JMarko Grcic",
                nationality:"CRO"
              },{
                id:13,
                name:"Denis Majstorovic",
                nationality:"CRO"
              },{
                id:14,
                name:"Matej Buljanovic",
                nationality:"CRO"
              },{
                id:15,
                name:"Niko Vranesevic",
                nationality:"CRO"
              }
            ],
            substitutes:[
              {
                id:16,
                name:"Filip Perica",
                nationality:"CRO"
              },
              {
                id:17,
                name:"Ivan Kordun",
                nationality:"CRO"
              },
              {
                id:18,
                name:"Ivan Brcic",
                nationality:"CRO"
              },
              {
                id:19,
                name:"Ante Majic",
                nationality:"CRO"
              },
              {
                id:20,
                name:"Vinko Rudic",
                nationality:"CRO"
              },
              {
                id:21,
                name:"Luka Lerotic",
                nationality:"CRO"
              },
              {
                id:22,
                name:"Stipe Brcic",
                nationality:"CRO"
              },
              {
                id:23,
                name:"Marin Vlajcevic",
                nationality:"CRO"
              },
            ]
          },
        },
        away: {
          id:6,
          name: "Suécia",
          logo: "src/assets/flags/suecia.png",
          lineups: {
            starting:[
              {
                id:1,
                name:"Ale Loman",
                nationality:"SUE"
              },{
                id:2,
                name:"Casper Forsberg",
                nationality:"SUE"
              },{
                id:3,
                name:"Petter Strale",
                nationality:"SUE"
              },{
                id:4,
                name:"Christopher Sidwick",
                nationality:"SUE"
              },{
                id:5,
                name:"Oscar Larsson",
                nationality:"SUE"
              },{
                id:6,
                name:"Arthur Marini",
                nationality:"SUE"
              },{
                id:7,
                name:"Sami Paulsson",
                nationality:"SUE"
              },{
                id:8,
                name:"Theodor Karlsson",
                nationality:"SUE"
              },{
                id:9,
                name:"Mattias Nilsson",
                nationality:"SUE"
              },{
                id:10,
                name:"Karl Hoade",
                nationality:"SUE"
              },{
                id:11,
                name:"Mathis De Chavaille",
                nationality:"SUE"
              },{
                id:12,
                name:"Philip Murphy",
                nationality:"SUE"
              },{
                id:13,
                name:"Axel Kalling-Smith",
                nationality:"SUE"
              },{
                id:14,
                name:"Samuel Ahlback",
                nationality:"SUE"
              },{
                id:15,
                name:"Robin Fransson",
                nationality:"SUE"
              }
            ],
            substitutes:[
              {
                id:16,
                name:"Anthony Rafael",
                nationality:"SUE"
              },
              {
                id:17,
                name:"Alexander Nahas",
                nationality:"SUE"
              },
              {
                id:18,
                name:"Viktor Cordes",
                nationality:"SUE"
              },
              {
                id:19,
                name:"Elias Granath",
                nationality:"SUE"
              },
              {
                id:20,
                name:"Philip Axelsson",
                nationality:"SUE"
              },
              {
                id:21,
                name:"Linus Ahlgren",
                nationality:"SUE"
              },
              {
                id:22,
                name:"Vaa Iuta",
                nationality:"SUE"
              },
              {
                id:23,
                name:"Tim Johansson",
                nationality:"SUE"
              },
            ]
          },
        },
      },
      scores:{
        home:20,
        away:22,
      },
      periods:{
        first:{
          home:10,
          away:14
        },
        second:{
          home:10,
          away:8
        },
        overtime:{
          home:null,
          away:null
        },
        second_overtime:{
          home:null,
          away:null
        }
      },
      summary: [
        {
          minute:5,
          type:"Penalty",
          player:"Robin Fransson",
          period:"first",
          homeTeam:true
        }, 
        {
          minute:24,
          type:"Try",
          player:"Axel Kalling-Smith",
          period:"first",
          homeTeam:false
        },
        {
          minute:25,
          type:"Conversion",
          player:"Mattias Nilsson",
          period:"first",
          homeTeam:false
        },
        {
          minute:31,
          type:"Try",
          player:"Marko Svagusa",
          period:"first",
          homeTeam:true
        },
        {
          minute:32,
          type:"Conversion",
          player:"Jason Newton",
          period:"first",
          homeTeam:true
        },
        {
          minute:39,
          type:"Try",
          player:"Axel Kalling-Smith",
          period:"first",
          homeTeam:false
        },
        {
          minute:40,
          type:"Try",
          player:"Tim Johansson",
          period:"first",
          homeTeam:false
        },{
          minute:45,
          type:"Try",
          player:"Axel Kalling-Smith",
          period:"second",
          homeTeam:false
        },{
          minute:56,
          type:"Try",
          player:"Daniel Mau'u",
          period:"second",
          homeTeam:true
        },{
          minute:74,
          type:"Try",
          player:"Ivan Kordun",
          period:"second",
          homeTeam:true
        },
      ],
      statistics:{
        tries:{
          name: 'Tries',
          home:3,
          away:3
        },
        convertedGoals:{
          name: 'Converted Goals',
          home:1,
          away:2
        },
        penalties:{
          name: 'Penalties',
          home:1,
          away:1,
        },
        penaltiesAttemps:{
          name: 'Penalty Attempts',
          home:1,
          away:1
        },
        goalsPercentage:{
          name: 'Percentage of Goals',
          home:80,
          away:84
        },
        droppedGoals:{
          name: 'Dropped Goals',
          home:0,
          away:0
        },
        droppedGoalAttempts:{
          name: 'Dropped Goals Attempts',
          home:0,
          away:0
        },
        yellowCards:{
          name: 'Yellow Cards',
          home:0,
          away:0
        },        
      }
    },
]
}