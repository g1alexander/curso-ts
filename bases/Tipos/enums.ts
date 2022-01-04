(() => {
  enum AudioLevel {
    min = 1,
    medium,
    max = 10,
  }

  // let currentAudio: AudioLevel = 10;
  let currentAudio: AudioLevel = AudioLevel.medium;

  console.log(currentAudio);
  console.log(AudioLevel);
})();
