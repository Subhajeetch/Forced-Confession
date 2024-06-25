const container = document.querySelector('.container');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');



yesBtn.addEventListener('click', () => {
  question.innerHTML = 'Thanks, we will make 1 billion kids :)';
});

const containerRect = container.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

noBtn.addEventListener('mouseover', () => {
  const i = math.floor(math.random() * (containerRect.width - noBtnRect.width)) + 1;
  const j = math.floor(math.random() * (containerRect.height - noBtnRect.height)) + 1;
  
  noBtn.style.left = i + 'px';
  noBtn.style.top = j + 'px';
});
