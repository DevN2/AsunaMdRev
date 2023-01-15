// const { Colors, Values, Game } = require("uno-engine") 
// players = ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6'];
// game = new Game(players);
// card = game.discardedCard;
// cc = card.color;
// const cv = card.values;

// msg.reply(cc)
// msg.reply(Colors[cc])
// msg.reply(players[1])

// const { Game, Colors, Value } = require('uno-engine');

// //Algoritma game
// players = ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', ];
// game = new Game(players);
// //const card1 = player.getCardByValue(value);  // get the exact card in the player's hand
// card = game.discardedCard;  // current card in-play
// cc = card.color;    // get the index of the card color: 0 to 3
// cv = card.values;                          // (WILD and WILD DRAW FOUR will not have this property set)
// Colors[cardColor];                // get the name of the color: RED, BLUE, GREEN, or YELLOW
 
// // Card value
// const cardValue = card2.value; // get the index of the card value: 0 to 14
// Values[cardValue];            // get the name of the card:
//                               // 0-9, SKIP, REVERSE, DRAW_TWO, WILD, or WILD_DRAW_TWO

// // Get card from value/color strings
// const valuez = Values.SIX;
// const colorz = Colors.BLUE;
// const card3 = new Card(valuez, colorz);
 
// // Set WILD or WD4 color
// const [color, value] = ['GREEN', 'WILD'];   // get args from player input
// const card = player.getCardByValue(value);  // get exact WILD/WD4 in player's hand
// card.color = Colors[color];                 // set color of WILD/WD4 in hand
 
// // Get Card from args function
// const getCard = ([color, value], player) => {
//   let card = new Card(Values[value], Colors[color]);
//   if (value === 'WILD' || value === 'WILD_DRAW_FOUR') {
//     card = player.getCardByValue(Values[value]);
//     card.color = Colors[color];
//   }
//   return card;
// };

// module.exports = {
// 	name: "uno",
// 	alias: ["uno"],
// 	category: "game",
// 	desc: "Main uno",
// 	isSpam: true,
// 	async run({ msg, conn}) {
//         try {
//             const aa = game.play(card); // play a card from the hand of the current player
//             msg.reply(aa)
//           } catch (e) {
//               msg.reply(e)
//             // throws error if player tries to play a card they don't have
//             // throws error if player tries to play a card that can't be played (doesn't match discardedCard)
//             // throws error if card doesn't have a color property (wild, wd4)
//             // see `Card Properties` for setting wild and wd4 color
//           }
//           const ab = game.draw(); // draw a card for the current player
//         msg.reply(ab)
//           try {
//             const ac = game.pass(); // current player pass after drawing
//             msg.reply(ac)
//           } catch (e) {
//               msg.reply(e)
//             // throws error if player hasn't drawn yet
//           }
           
//           // Yelling UNO!
//           game.uno();           // game.currentPlayer is yelling UNO!
//           game.uno("Player 1"); // Other than current player yells UNO
//                                 // - If the yelling player is the current player,
//                                 //   and they have 2 or less cards, he is just marked as "yelled"
//                                 // - If the yelling player has more than 2 cards,
//                                 //   the game searches for someone with 1 card that did not yell "UNO!",
//                                 //   and make him draw 2 cards. If there's no one,
//                                 //   the yelling player draws instead.
//                                 game.on('beforedraw', ({ data: { player, quantity } }) => {
//                                     // Fired when a player requests cards from the draw pile.
//                                   });
                                   
//                                   game.on('draw', ({ data: { player, cards } }) => {
//                                     // Fired after player's drawn cards are added to his hands.
//                                   });
                                   
//                                   game.on('beforepass', ({ data: { player } }) => {
//                                     // Fired when a player can pass and requests to pass its turn.
//                                   });
                                   
//                                   game.on('beforecardplay', ({ data: { card, player } }) => {
//                                     // Fired before player discards a card in the discard pile.
//                                   });
                                   
//                                   game.on('cardplay', ({ data: { card, player } }) => {
//                                     // Fired after player's card is thrown in the discard pile.
//                                   });
                                   
//                                   game.on('nextplayer', ({ data: { player } }) => {
//                                     // Fired when `game.currentPlayer` changes.
//                                   });
                                   
//                                   game.on('end', ({ data: { winner, score } }) => {
//                                     // emitted when any player has 0 cards left
//                                     // ----------
//                                     // the winner gets score based on the cards the other players have remaining at the end:
//                                     // - number cards are worth their own value
//                                     // - WILD and WD4 are worth 50
//                                     // - DRAW TWO, SKIP, and REVERSE are worth 20
//                                   });
//                                 }
//     };