const card_deck = [];
const player = [];
const dealer = [];
function blackjack() {
  // Create the card deck
  const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const suits = ["spades", "hearts", "diamonds", "clubs"];
  let face_cards = "";
  for (let i = 0; i < 52; i++) {
    if (i < 13) {
      if (i % 13 == 0) {
        face_cards = "Ace";
        card_deck.push(face_cards + " " + suits[0]);
      } else if (i % 13 == 12) {
        face_cards = "King";
        card_deck.push(face_cards + " " + suits[0]);
      } else if (i % 13 == 11) {
        face_cards = "Queen";
        card_deck.push(face_cards + " " + suits[0]);
      } else if (i % 13 == 10) {
        face_cards = "Jack";
        card_deck.push(face_cards + " " + suits[0]);
      } else {
        card_deck.push(deck[i % 13] + " " + suits[0]);
      }
    } else if (i < 26) {
      if (i % 13 == 0) {
        face_cards = "Ace";
        card_deck.push(face_cards + " " + suits[1]);
      } else if (i % 13 == 12) {
        face_cards = "King";
        card_deck.push(face_cards + " " + suits[1]);
      } else if (i % 13 == 11) {
        face_cards = "Queen";
        card_deck.push(face_cards + " " + suits[1]);
      } else if (i % 13 == 10) {
        face_cards = "Jack";
        card_deck.push(face_cards + " " + suits[1]);
      } else {
        card_deck.push(deck[i % 13] + " " + suits[1]);
      }
    } else if (i < 39) {
      if (i % 13 == 0) {
        face_cards = "Ace";
        card_deck.push(face_cards + " " + suits[2]);
      } else if (i % 13 == 12) {
        face_cards = "King";
        card_deck.push(face_cards + " " + suits[2]);
      } else if (i % 13 == 11) {
        face_cards = "Queen";
        card_deck.push(face_cards + " " + suits[2]);
      } else if (i % 13 == 10) {
        face_cards = "Jack";
        card_deck.push(face_cards + " " + suits[2]);
      } else {
        card_deck.push(deck[i % 13] + " " + suits[2]);
      }
    } else {
      if (i % 13 == 0) {
        face_cards = "Ace";
        card_deck.push(face_cards + " " + suits[3]);
      } else if (i % 13 == 12) {
        face_cards = "King";
        card_deck.push(face_cards + " " + suits[3]);
      } else if (i % 13 == 11) {
        face_cards = "Queen";
        card_deck.push(face_cards + " " + suits[3]);
      } else if (i % 13 == 10) {
        face_cards = "Jack";
        card_deck.push(face_cards + " " + suits[3]);
      } else {
        card_deck.push(deck[i % 13] + " " + suits[3]);
      }
    }
  }
  console.log(card_deck);

  // const players = [dealer, player1];
}

function Start() {
  // Deal the cards

  let node = document.createElement("h2");
  node.innerText = "Player:";
  document.getElementsByClassName("deck")[0].appendChild(node);
  node = document.createElement("h2");
  node.innerText = "Dealer";
  document.getElementsByClassName("dealer")[0].appendChild(node);
  playerDraw();
  dealerDraw();
  playerDraw();
  dealerDraw();
  // setTimeout(dealerDraw(), 2000);
  // setTimeout(playerDraw(), 2000);
  // setTimeout(dealerDraw(), 2000);

  console.log("player", player);
  console.log("dealer", dealer);
  console.log(card_deck);

  // Show the cards
  // Check for blackjack
  // Check for bust
  // Check for 21
  // Check for winner
}
function deal() {}
function hit() {}
function stand() {}
function bust() {}

// A Player Draws
function playerDraw() {
  let card = parseInt(Math.random() * (card_deck.length - 1) + 1);
  player.push(card_deck[card]);
  card_deck.splice(card, 1);

  let node = document.createElement("div");
  node.innerText = card_deck[card];
  node.className = "card";
  document.getElementsByClassName("dealer")[0].appendChild(node);
}

// The Dealer Draws
function dealerDraw() {
  let card = parseInt(Math.random() * (card_deck.length - 1) + 1);
  dealer.push(card_deck[card]);
  card_deck.splice(card, 1);

  let node = document.createElement("div");
  node.innerText = card_deck[card];
  node.className = "card";
  document.getElementsByClassName("deck")[0].appendChild(node);
}
