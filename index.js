const card_deck = [];
const player = [];
const dealer = [];
// Create card deck
function cards() {
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

// Start the Game
function start() {
  let newDeck = cards();

  for (let i = 0; i < newDeck.length; i++) {
    card_deck.push(newDeck[i]);
  }
  // Setup playground
  let node = document.createElement("h4");
  node.innerText = "Card Total:" + 0;
  node.id = "scoreP";
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
  let scoreP = score(player);
  let scoreD = score(dealer);
  node = document.getElementById("scoreP");
  node.innerText = "Card Total:" + scoreP;

  // Check for natural blackjack
  if (scoreD == scoreP && scoreD == 21) {
    node = document.createElement("scoreD");
    node.innerText = "Card Total:" + scoreD;
    node.id = "scoreD";
    document.getElementsByClassName("dealer")[0].prepend(node);

    node = document.getElementsByClassName("dealer__deck__card")[1];
    node.innerText = dealer[1];
    tie();
  } else if (scoreD == 21) {
    node = document.createElement("scoreD");
    node.innerText = "Card Total:" + scoreD;
    node.id = "scoreD";
    document.getElementsByClassName("dealer")[0].prepend(node);

    node = document.getElementsByClassName("dealer__deck__card")[1];
    node.innerText = dealer[1];
    blackjack("dealer");
  } else if (scoreP == 21) {
    node = document.createElement("scoreD");
    node.innerText = "Card Total:" + scoreD;
    node.id = "scoreD";
    document.getElementsByClassName("dealer")[0].prepend(node);

    node = document.getElementsByClassName("dealer__deck__card")[1];
    node.innerText = dealer[1];
    blackjack("player");
  }
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
}

// Score of a Player
function score(player) {
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

  return score;
}
// A Player Hits
function hit() {
  console.log("hit");
  playerDraw();
  console.log(card_deck);
  let scoreP = score(player);
  let node = document.getElementById("scoreP");
  node.innerText = "Card Total:" + scoreP;

  // Check for bust
  if (scoreP > 21) {
    scoreD = score(dealer);

    node = document.createElement("scoreD");
    node.innerText = "Card Total:" + scoreD;
    node.id = "scoreD";
    document.getElementsByClassName("dealer")[0].prepend(node);

    node = document.getElementsByClassName("dealer__deck__card")[1];
    node.innerText = dealer[1];

    bust("player");
  } else if (scoreP == 21) {
    // Check for BlackJack
    node = document.createElement("scoreD");
    node.innerText = "Card Total:" + scoreD;
    node.id = "scoreD";
    document.getElementsByClassName("dealer")[0].prepend(node);

    node = document.getElementsByClassName("dealer__deck__card")[1];
    node.innerText = dealer[1];
    blackjack("player");
  }
}
// A Player Stands
function stand() {
  console.log("stand");

  let scoreD = score(dealer);

  let node = document.createElement("scoreD");
  node.innerText = "Card Total:" + scoreD;
  node.id = "scoreD";
  document.getElementsByClassName("dealer")[0].prepend(node);

  node = document.getElementsByClassName("dealer__deck__card")[1];
  node.innerText = dealer[1];

  while (scoreD < 17) {
    dealerDraw(true);
    scoreD = score(dealer);
    node = document.getElementById("scoreD");
    node.innerText = "Card Total:" + scoreD;
  }
  scoreP = score(player);
  // Check for bust
  if (scoreD > 21) {
    bust("dealer");
  } else if (scoreD == 21) {
    // Check for BlackJack
    node = document.getElementsByClassName("dealer__deck__card")[1];
    node.innerText = dealer[1];
    blackjack("dealer");
  }
  // Check for winner
  else if (scoreD > scoreP) {
    lose();
  } else if (scoreP > scoreD) {
    win();
  } else {
    tie();
  }
  console.log("dealer score", scoreD);
  console.log("player score", scoreP);
}

// A Player Busts his Cards
function bust(user) {
  console.log("busted");
  document.getElementById("hit").remove();
  document.getElementById("stand").remove();

  let node = document.createElement("h2");
  if (user == "player") {
    node.innerText = "Busted! You lose";
  } else {
    node.innerText = "The Dealer is Busted! You win";
  }
  node.id = "result";
  document.getElementsByClassName("result")[0].appendChild(node);

  node = document.createElement("button");
  node.innerText = "Try again";
  node.id = "restart";

  node.onclick = restart;
  document.getElementsByClassName("action")[0].appendChild(node);
}

// the game reaches a loss
function lose() {
  console.log("lose");
  document.getElementById("hit").remove();
  document.getElementById("stand").remove();

  node = document.createElement("h2");
  node.innerText = "The Dealer Wins!";
  node.id = "result";
  document.getElementsByClassName("result")[0].appendChild(node);

  node = document.createElement("button");
  node.innerText = "Try again";
  node.id = "restart";

  node.onclick = restart;
  document.getElementsByClassName("action")[0].appendChild(node);
}

// the game reaches a win
function win() {
  console.log("win");
  document.getElementById("hit").remove();
  document.getElementById("stand").remove();

  node = document.createElement("h2");
  node.innerText = "You Win!";
  node.id = "result";
  document.getElementsByClassName("result")[0].appendChild(node);

  node = document.createElement("button");
  node.innerText = "Try again";
  node.id = "restart";

  node.onclick = restart;
  document.getElementsByClassName("action")[0].appendChild(node);
}

// the game reaches a tie
function tie() {
  console.log("tie");
  document.getElementById("hit").remove();
  document.getElementById("stand").remove();

  node = document.createElement("h2");
  node.innerText = "Tie, better luck next time";
  node.id = "result";
  document.getElementsByClassName("result")[0].appendChild(node);

  node = document.createElement("button");
  node.innerText = "Try again";
  node.id = "restart";

  node.onclick = restart;
  document.getElementsByClassName("action")[0].appendChild(node);
}

// Game reaches a BlackJack
function blackjack(user) {
  console.log("tie");
  document.getElementById("hit").remove();
  document.getElementById("stand").remove();

  node = document.createElement("h2");
  if (user == "player") node.innerText = "BlackJack!";
  else node.innerText = "Dealer Wins BlackJack!";
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

  document.getElementById("scoreD").remove();
  document.getElementById("scoreP").remove();
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
