const url = "./getAddresses.php?code=";
const propositionList = document.getElementById("propositions");

function getProps() {
  let input = document.getElementById("cp");
  if (input.value == "") {
    return;
  }
  console.log(url + input.value);
  propositionList.innerHTML = "";
  fetch(url + input.value)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        propositionList.innerHTML += `<li id="adresse-prop"> ${element.zip}  ${element.city}</li>`;
        document
          .getElementById("adresse-prop")
          .addEventListener("click", () => {});
      });
    });
}

function fillInput() {}
