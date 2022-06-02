const card_deck = [];
const player = [];
const dealer = [];
function blackjack() {
  // Create the card deck
  let card_deck_saved = [];
  const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const suits = ["spades", "hearts", "diamonds", "clubs"];
  let face_cards = "";
  for (let i = 0; i < 52; i++) {
    if (i < 13) {
      if (i % 13 == 0) {
        face_cards = "Ace";
        card_deck_saved.push(face_cards + " " + suits[0]);
      } else if (i % 13 == 12) {
        face_cards = "King";
        card_deck_saved.push(face_cards + " " + suits[0]);
      } else if (i % 13 == 11) {
        face_cards = "Queen";
        card_deck_saved.push(face_cards + " " + suits[0]);
      } else if (i % 13 == 10) {
        face_cards = "Jack";
        card_deck_saved.push(face_cards + " " + suits[0]);
      } else {
        card_deck_saved.push(deck[i % 13] + " " + suits[0]);
      }
    } else if (i < 26) {
      if (i % 13 == 0) {
        face_cards = "Ace";
        card_deck_saved.push(face_cards + " " + suits[1]);
      } else if (i % 13 == 12) {
        face_cards = "King";
        card_deck_saved.push(face_cards + " " + suits[1]);
      } else if (i % 13 == 11) {
        face_cards = "Queen";

        card_deck_saved.push(face_cards + " " + suits[1]);
      } else if (i % 13 == 10) {
        face_cards = "Jack";
        card_deck_saved.push(face_cards + " " + suits[1]);
      } else {
        card_deck_saved.push(deck[i % 13] + " " + suits[1]);
      }
    } else if (i < 39) {
      if (i % 13 == 0) {
        face_cards = "Ace";
        card_deck_saved.push(face_cards + " " + suits[2]);
      } else if (i % 13 == 12) {
        face_cards = "King";
        card_deck_saved.push(face_cards + " " + suits[2]);
      } else if (i % 13 == 11) {
        face_cards = "Queen";

        card_deck_saved.push(face_cards + " " + suits[2]);
      } else if (i % 13 == 10) {
        face_cards = "Jack";
        card_deck_saved.push(face_cards + " " + suits[2]);
      } else {
        card_deck_saved.push(deck[i % 13] + " " + suits[2]);
      }
    } else {
      if (i % 13 == 0) {
        face_cards = "Ace";
        card_deck_saved.push(face_cards + " " + suits[3]);
      } else if (i % 13 == 12) {
        face_cards = "King";
        card_deck_saved.push(face_cards + " " + suits[3]);
      } else if (i % 13 == 11) {
        face_cards = "Queen";

        card_deck_saved.push(face_cards + " " + suits[3]);
      } else if (i % 13 == 10) {
        face_cards = "Jack";
        card_deck_saved.push(face_cards + " " + suits[3]);
      } else {
        card_deck_saved.push(deck[i % 13] + " " + suits[3]);
      }
    }
  }
  console.log(card_deck);
  return card_deck_saved;
}

function start() {
  let newDeck = blackjack();

  for (let i = 0; i < newDeck.length; i++) {
    card_deck.push(newDeck[i]);
  }
  // Setup playground
  let node = document.createElement("h4");
  node.innerText = "Card Total:" + 0;
  node.id = "score";
  document.getElementsByClassName("player")[0].prepend(node);
  node = document.createElement("h2");
  node.id = "player";
  node.innerText = "Player";
  document.getElementsByClassName("player")[0].prepend(node);
  node = document.createElement("h2");
  node.innerText = "Dealer";
  node.id = "dealer";

  document.getElementsByClassName("dealer")[0].prepend(node);

  document.getElementById("start").remove();

  node = document.createElement("button");
  node.innerText = "Stand";
  node.id = "stand";
  node.onclick = stand;
  document.getElementsByClassName("action")[0].appendChild(node);

  node = document.createElement("button");
  node.innerText = "Hit";
  node.id = "hit";

  node.onclick = hit;
  document.getElementsByClassName("action")[0].appendChild(node);

  // add animation + delay for each card handed out
  // setTimeout(dealerDraw(), 2000);
  // setTimeout(playerDraw(), 2000);
  // setTimeout(dealerDraw(), 2000);

  // Deal the cards
  playerDraw();
  dealerDraw(true);
  playerDraw();
  dealerDraw(false);
  // Show score
  score();
  // let scoreP = score();
  // while (scoreP > 21) {
  //   document.getElementsByClassName("player__deck__card")[0].remove();
  //   document.getElementsByClassName("player__deck__card")[0].remove();
  //   card_deck.push(player[0]);
  //   card_deck.push(player[1]);
  //   player.splice(0, 2);
  //   playerDraw();
  //   playerDraw();
  //   scoreP = score();
  //   console.log("removing");
  // }
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

function score() {
  let score = 0;
  for (let i = 0; i < player.length; i++) {
    if (
      player[i].includes("King") ||
      player[i].includes("Queen") ||
      player[i].includes("Jack")
    ) {
      console.log(player[i]);
      score += 10;
    } else if (!player[i].includes("Ace")) {
      let num = player[i].substring(0, 2).trim();
      score += parseInt(num);
      console.log(score);
    }
  }
  for (let i = 0; i < player.length; i++) {
    if (player[i].includes("Ace")) {
      if (score <= 10) score += 11;
      else if (score > 10) score += 1;
    }
  }

  let node = document.getElementById("score");
  node.innerText = "Card Total:" + score;
  node.id = "score";
  return score;
}
// A Player Hits
function hit() {
  console.log("hit");
  playerDraw();
  console.log(card_deck);
  let scoreP = score();
  if (scoreP > 21) {
    bust();
  }
}
// A Player Stands
function stand() {
  console.log("stand");
}
function bust() {
  console.log("busted");
  document.getElementById("hit").remove();
  document.getElementById("stand").remove();

  let node = document.getElementsByClassName("dealer__deck__card")[1];
  node.innerText = dealer[1];
  node = document.createElement("h2");
  node.innerText = "Busted!";
  node.id = "result";
  document.getElementsByClassName("result")[0].appendChild(node);

  node = document.createElement("button");
  node.innerText = "Try again";
  node.id = "restart";

  node.onclick = restart;
  document.getElementsByClassName("action")[0].appendChild(node);
}

function restart() {
  // Clear playground

  // switch to start button
  document.getElementById("restart").remove();
  let node = document.createElement("button");

  node.onclick = start;
  node.id = "start";
  node.innerText = "Start";
  document.getElementsByClassName("action")[0].appendChild(node);

  // remove dealer title

  document.getElementById("dealer").remove();

  // remove dealer cards
  node = document.getElementsByClassName("dealer__deck");
  for (let i = 0; i < node.length; i++) node[i].remove();

  // remove player title

  document.getElementById("player").remove();

  // remove player cards
  node = document.getElementsByClassName("player__deck");
  for (let i = 0; i < node.length; i++) node[i].remove();

  node = document.createElement("div");
  node.className = "player__deck";
  document.getElementsByClassName("player")[0].appendChild(node);

  node = document.createElement("div");
  node.className = "dealer__deck";
  document.getElementsByClassName("dealer")[0].appendChild(node);

  document.getElementById("score").remove();
  document.getElementById("result").remove();

  // Clear Scores and Cards
  player.splice(0, player.length);
  dealer.splice(0, dealer.length);

  card_deck.splice(0, card_deck.length);
}

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
function dealerDraw(face) {
  let card = parseInt(Math.random() * (card_deck.length - 1) + 1);
  let val = card_deck[card];
  dealer.push(val);
  card_deck.splice(card, 1);

  let node = document.createElement("div");
  if (face) node.innerText = val;
  node.className = "dealer__deck__card";
  document.getElementsByClassName("dealer__deck")[0].appendChild(node);
}
