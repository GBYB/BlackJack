const card_deck = [];
const player = [];
const dealer = [];
function blackjack() {
  // Create the card deck
  const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const suits = ["spades", "hearts", "diamonds", "clubs"];
  let face_cards = "";
  for (let i = 1; i <= 52; i++) {
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
  getCard(card);
  // Deal the cards
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

function getCard() {
  let card = Math.random() * (card_deck.length - 1) + 1;

  card_deck = card_deck.splice(card, 1);
  // let suit = "";
  let value = "";
  // if (card < 13) {
  //   suit = "spades";
  // } else if (card < 26) {
  //   suit = "hearts";
  // } else if (card < 39) {
  //   suit = "diamonds";
  // } else {
  //   suit = "clubs";
  // }
  if (card % 13 == 0) {
    value = "king";
  } else if (card % 12 == 0) {
    value = "Queen";
  } else if (card % 11 == 0) {
    value = "Jack";
  } else {
    value = card % 13;
  }
}
