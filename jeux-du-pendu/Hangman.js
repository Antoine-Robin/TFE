class Database {
  constructor() {
    this.words = [
      { word: "giraffe", clue: "animals" },
      { word: "lion", clue: "animals" },
      { word: "tiger", clue: "animals" },
      { word: "elephant", clue: "animals" },
      { word: "monkey", clue: "animals" },
      { word: "leopard", clue: "animals" },
      { word: "penguin", clue: "animals" },
      { word: "gazelle", clue: "animals" },
      { word: "hippopotamus", clue: "animals" },
      { word: "rhinoceros", clue: "animals" },
      { word: "crocodile", clue: "animals" },
      { word: "kangaroo", clue: "animals" },
      { word: "platypus", clue: "animals" },
      { word: "cheetah", clue: "animals" },
      { word: "puma", clue: "animals" },
      { word: "lizard", clue: "animals" },
      { word: "snake", clue: "animals" },
      { word: "tortoise", clue: "animals" },
      { word: "ford", clue: "cars" },
      { word: "ferrari", clue: "cars" },
      { word: "porsche", clue: "cars" },
      { word: "lamborghini", clue: "cars" },
      { word: "bmw", clue: "cars" },
      { word: "audi", clue: "cars" },
      { word: "mercedes", clue: "cars" },
      { word: "jaguar", clue: "cars" },
      { word: "tesla", clue: "cars" },
      { word: "skyscraper", clue: "buildings" },
      { word: "bridge", clue: "buildings" },
      { word: "tower", clue: "buildings" },
      { word: "cathedral", clue: "buildings" },
      { word: "temple", clue: "buildings" },
      { word: "museum", clue: "buildings" },
      { word: "palace", clue: "buildings" },
      { word: "library", clue: "buildings" },
      { word: "stadium", clue: "buildings" },
      { word: "computer", clue: "technology" },
      { word: "smartphone", clue: "technology" },
      { word: "tablet", clue: "technology" },
      { word: "laptop", clue: "technology" },
      { word: "television", clue: "technology" },
      { word: "printer", clue: "technology" },
      { word: "camera", clue: "technology" },
      { word: "headphones", clue: "technology" },
      { word: "bluetooth", clue: "technology" },
      { word: "router", clue: "technology" },
      { word: "grapes", category: "food" },
      { word: "banana", clue: "food" },
      { word: "orange", clue: "food" },
      { word: "strawberry", clue: "food" },
      { word: "kiwi", clue: "food" },
      { word: "pineapple", clue: "food" },
      { word: "mango", clue: "food" },
      { word: "apple", clue: "food" },
      { word: "pear", clue: "food" },
      { word: "peach", clue: "food" },
      { word: "plum", clue: "food" },
      { word: "lemon", clue: "food" },
      { word: "lime", clue: "food" },
      { word: "avocado", clue: "food" },
      { word: "watermelon", clue: "food" },
      { word: "cantaloupe", clue: "food" },
      { word: "honeydew", clue: "food" },
      { word: "mushroom", clue: "food" },
      { word: "onion", clue: "food" },
      { word: "garlic", clue: "food" },
      { word: "potato", clue: "food" },
      { word: "carrot", clue: "food" },
      { word: "cucumber", clue: "food" },
      { word: "tomato", clue: "food" },
      { word: "bell pepper", clue: "food" },
      { word: "spinach", clue: "food" },
      { word: "lettuce", clue: "food" },
      { word: "broccoli", clue: "food" },
      { word: "cauliflower", clue: "food" },
      { word: "asparagus", clue: "food" },
      { word: "eggplant", clue: "food" },
      { word: "zucchini", clue: "food" },
      { word: "squash", clue: "food" },
      { word: "pumpkin", clue: "food" },
      { word: "kale", clue: "food" },
    ];
  }

  random() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }
}

class Word {
  constructor(string) {
    this.string = string;
  }

  positionsFor(letter) {
    let positions = [];
    let array = this.string.split("");
    for (let i = 0; i < array.length; ++i) {
      if (letter == array[i]) {
        positions.push(i);
      }
    }
    return positions;
  }
}

class Hangman {
  constructor() {
    this.db = new Database();
    this.line = this.db.random();
    this.word = this.line.word;
    this.t = new Word(this.word);
    this.lives = 7;
  }

  start(string) {
    this.render(string);
  }

  resetGame(message) {
    alert(message);
    window.location.reload();
  }
  render(id) {
    let container = document.getElementById(id);
    let array = this.t.string.split("");
    let letterContainer = document.createElement("div");
    let image = document.createElement("div");
    image.classList.add("hangman-img");
    let clue = document.createElement("p");
    clue.innerHTML = "clue : " + this.line.clue;
    let lives = document.createElement("p");
    lives.innerHTML = "lives remaining: " + this.lives;
    container.appendChild(image);
    container.appendChild(clue);

    container.appendChild(letterContainer);
    container.appendChild(lives);

    letterContainer.classList.add("test");
    array.forEach((letter) => {
      let guessPlaceholder = '<div class="placeholder">  </div>';
      letterContainer.innerHTML += guessPlaceholder;
    });

    let input = document.createElement("input");
    input.type = "text";
    input.id = "guess-input";
    input.placeholder = "make a guess";
    container.appendChild(input);

    console.log(this.t);

    let placeholders = document.querySelectorAll(".placeholder");

    let correctAswers = 0;

    input.addEventListener("keypress", (e) => {
      let positions = this.t.positionsFor(e.key);

      if (array.includes(e.key)) {
        correctAswers += positions.length;
        for (let i = 0; i < positions.length; ++i) {
          placeholders[positions[i]].innerHTML = e.key;
        }
      } else {
        --this.lives;
        let backgroundPos = 0 - 75 * (7 - this.lives);
        let divImg = document.querySelector(".hangman-img");
        console.log(backgroundPos);
        divImg.style.backgroundPositionX = backgroundPos + "px";
        if (this.lives == 0) {
          this.resetGame("you lost :(");
        }
      }

      if (correctAswers == array.length) {
        this.resetGame("you won :)");
      }
      lives.innerHTML = "lives remaining: " + this.lives;
      setTimeout(() => {
        input.value = "";
      }, 1000);
    });
  }
}

export default Hangman;
