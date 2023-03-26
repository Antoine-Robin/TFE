const drums = [
  {
    letter: "",
    label: "",
    soundURL: "",
  },
  {
    letter: "",
    label: "",
    soundURL: "",
  },
  {
    letter: "",
    label: "",
    soundURL: "",
  },
  {
    letter: "",
    label: "",
    soundURL: "",
  },
  {
    letter: "",
    label: "",
    soundURL: "",
  },
  {
    letter: "",
    label: "",
    soundURL: "",
  },
  {
    letter: "",
    label: "",
    soundURL: "",
  },
  {
    letter: "",
    label: "",
    soundURL: "",
  },
  {
    letter: "",
    label: "",
    soundURL: "",
  },
];

let container = document.querySelector("#drum-holder");

for (let drum of drums) {
  let pad = document.createElement("div");
  let letter = document.createElement("span");
  let label = document.createElement("span");

  letter.innerText = drum.letter;

  pad.append(letter);
  pad.append(label);
}
