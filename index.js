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
}

function Start() {
  // Setup playground
  let node = document.createElement("h4");
  node.innerText = "Card Total:" + 0;
  node.id = "score";
  document.getElementsByClassName("player")[0].prepend(node);
  node = document.createElement("h2");
  node.innerText = "Player";
  document.getElementsByClassName("player")[0].prepend(node);
  node = document.createElement("h2");
  node.innerText = "Dealer";
  document.getElementsByClassName("dealer")[0].prepend(node);

  document.getElementById("start").remove();

  node = document.createElement("button");
  node.innerText = "Stand";
  node.onclick = stand;
  document.getElementsByClassName("action")[0].appendChild(node);

  node = document.createElement("button");
  node.innerText = "Hit";
  node.onclick = hit;
  document.getElementsByClassName("action")[0].appendChild(node);

  // add animation + delay for each card handed out
  // setTimeout(dealerDraw(), 2000);
  // setTimeout(playerDraw(), 2000);
  // setTimeout(dealerDraw(), 2000);

  // Deal the cards
  playerDraw();
  dealerDraw();
  playerDraw();
  dealerDraw();
  // Show score
  score();

  //

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

// A Player Hits
function hit() {
  console.log("hit");
  playerDraw();
  score();
}

function score() {
  let score = 0;
  for (let i = 0; i < player.length; i++) {
    if (
      player[i].includes("King") ||
      player[i].includes("Queen") ||
      player[i].includes("Jack")
    ) {
      console.log(player[i]);
      score += 11;
    } else if (!player[i].includes("Ace")) {
      let num = player[i].substring(0, 2).trim();
      score += parseInt(num);
      console.log(score);
    }
  }
  for (let i = 0; i < player.length; i++) {
    if (player[i].includes("Ace")) {
      if (score <= 11) score += 10;
      else if (score > 11) score += 1;
    }
  }

  let node = document.getElementById("score");
  node.innerText = "Card Total:" + score;
  return score;
}
// A Player Stands
function stand() {
  console.log("stand");
}
function bust() {}

// A Player Draws
function playerDraw() {
  let card = parseInt(Math.random() * (card_deck.length - 1) + 1);
  let val = card_deck[card];
  player.push(val);
  card_deck.splice(card, 1);

  let node = document.createElement("div");
  node.innerText = val;
  node.className = "player__deck__card";
  document.getElementsByClassName("player__deck")[0].appendChild(node);
}

// The Dealer Draws
function dealerDraw() {
  let card = parseInt(Math.random() * (card_deck.length - 1) + 1);
  let val = card_deck[card];
  dealer.push(val);
  card_deck.splice(card, 1);

  let node = document.createElement("div");
  node.innerText = val;
  node.className = "dealer__deck__card";
  document.getElementsByClassName("dealer__deck")[0].appendChild(node);
}
