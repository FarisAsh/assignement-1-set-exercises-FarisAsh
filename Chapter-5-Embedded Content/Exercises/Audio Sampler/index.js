//audio samples with labels for proper name display
const samples = [
  { file: "ah-ha.mp3", label: "Ah ha!" },
  { file: "back-of-the-net.mp3", label: "Back of the net" },
  { file: "dan.mp3", label: "Dan!" },
  { file: "imconfused.mp3", label: "I'm confused" },
  { file: "iateascotchegg.mp3", label: "I ate a Scotch egg" },
  { file: "emailoftheevening.mp3", label: "Email of the evening" },
  { file: "hellopartridge.mp3", label: "Hello Partridge" },
  { file: "bangoutoforder.mp3", label: "Bang out of order!" }
];

//soundboard container reference
const soundboard = document.getElementById('soundboard');

//button for each sample
samples.forEach(sample => {
  const button = document.createElement('button');
  button.classList.add('sound-button');

  //using the label instead of the file name
  button.textContent = sample.label;

  //button plays audio when clicked
  button.addEventListener('click', () => {
    const audio = new Audio(`audio/${sample.file}`);
    audio.play();
  });

  //adding the button
  soundboard.appendChild(button);
});
