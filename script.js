const landingPage = document.getElementById('landing-page');
const questionPage = document.getElementById('question-page');
const successPage = document.getElementById('success-page');

const openBtn = document.getElementById('open-btn');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

let yesButtonScale = 1;

openBtn.addEventListener('click',()=>{
    landingPage.classList.add('hidden');
    questionPage.classList.remove('hidden');
});

yesBtn.addEventListener('click', () => {
    confetti({
        particleCount: 150, // How many pieces of confetti
        spread: 70,         // How wide they fly
        origin: { y: 0.6 }  // Where they start from (0.6 is slightly below the middle)
    });
    
    questionPage.classList.add('hidden');
    successPage.classList.remove('hidden');
});

const moveButton = () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    yesButtonScale += 0.15;
    yesBtn.style.transform = `scale(${yesButtonScale})`;
};

noBtn.addEventListener('mouseover',moveButton);
noBtn.addEventListener('touchstart',(e)=>{
    e.preventDefault();
    moveButton();
});
