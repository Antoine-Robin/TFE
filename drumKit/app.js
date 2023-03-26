const drum_holder = document.getElementById("drum-holder");

const sounds = [
  {
    key: "a",
    label: "Kick_89_35",
    src: "https://d7d3471nr939s.cloudfront.net/DubTechnoProgressions_Noiz_SP/MP3/One+Shots/Kick_89_35.mp3?cb=30402014-ec1c-4b29-b301-ed0d18f20187",
  },
  {
    key: "t",
    label: "NoiseKick",
    src: "https://d7d3471nr939s.cloudfront.net/ThisIsBass_Noiiz/MP3/One+Shots/Drums/808s/E_808_07_667.mp3?cb=845e3b30-29a5-4803-b25b-bd38ba8ee1a1",
  },
  {
    key: "i",
    label: "BD_Nova",
    src: "https://d7d3471nr939s.cloudfront.net/80sDrums_Noiz_SP/MP3/One+Shots/BD_Nova_1_SP.mp3?cb=fe588a51-113f-4a4b-9548-3ea0fce09cd2",
  },
  {
    key: "m",
    label: "NoiseKick",
    src: "https://d7d3471nr939s.cloudfront.net/Vessel_Noiiz/MP3/One+Shots/Drums/Kicks/NoiseKick_04_694.mp3?cb=fd0bc032-e2de-4fdd-a075-35a6034b0a52",
  },
  {
    key: "g",
    label: "Kick_06",
    src: "https://d7d3471nr939s.cloudfront.net/Luka5AmHouse_Noiz_SP/MP3/One+Shots/Kick_06_179_SP.mp3?cb=a1d64cbd-56e8-4211-a430-4e3385842baa",
  },
  {
    key: "v",
    label: "HeavyBall",
    src: "https://d7d3471nr939s.cloudfront.net/FoundSoundOneShots_Noiiz_SP/MP3/One+Shots/Kick/HeavyBall_02_318_SP.mp3?cb=f3392cc0-c4b9-4db2-a80c-9b743e024209",
  },
  {
    key: "k",
    label: "Noiz_SP",
    src: "https://d7d3471nr939s.cloudfront.net/KG&LivewireDnB_Noiz_SP/MP3/One+Shots/Kick_16_161_SP.mp3?cb=bcf141b7-2470-43b4-8156-bcdc23287276",
  },
  {
    key: "d",
    label: "LongKick",
    src: "https://d7d3471nr939s.cloudfront.net/EDMShockTools_Noiiz_SP/MP3/One+Shots/Kicks/Kicks+Long/25_LongKick_SP_356_106.mp3?cb=e6371442-bb99-4da6-88e3-527862bf3a70",
  },
  {
    key: "x",
    label: "Noiiz_SP",
    src: "https://d7d3471nr939s.cloudfront.net/EDMShockTools_Noiiz_SP/MP3/One+Shots/Kicks/Kicks+Long/25_LongKick_SP_356_46.mp3?cb=373f7c7e-b61c-4904-8092-d963093e8a69",
  },
];

for (const sound of sounds) {
  drum_holder.innerHTML += create_pad(sound.key, sound.label, sound.src);
}

function create_pad(key, label, src) {
  return `<div class="pad" data-key="${key}" > 
  <audio data-key="${key}" src="${src}"></audio>
  <p class="letter"> ${key.toUpperCase()}  </p>
  <p class="soud" > ${label} </p> 
  </div>`;
}

window.addEventListener("keypress", (e) => {
  let key = e.key;
  let audio = document.querySelector(`audio[data-key="${key}"]`);
  let pad = document.querySelector(`div[data-key="${key}"]`);
  if (!audio) return;
  audio.play();
  pad.classList.add("playing");

  setTimeout(() => {
    pad.classList.remove("playing");
  }, audio.duration * 1000);
});
