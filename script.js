
const bgContainer = document.getElementById('bg-container');
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('bg-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 5 + 10 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    bgContainer.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 15000);
}
setInterval(createHeart, 600)
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainGif = document.getElementById('mainGif');
const successScreen = document.getElementById('successScreen');
const gifArea = document.querySelector('.gif-area');


mainGif.onload = () => {
    if (mainGif.height > 0) {
        gifArea.style.height = mainGif.height + 'px';
    }
};


const gifs = [
    "gif/smea-sony-music-africa.webp",
    "gif/surprised-surprise.gif",
    "gif/sad-eyes.gif",
    "gif/cristiano-ronaldo-cristiano-ronaldo-meme.gif",
    "gif/bruh.gif",
    "gif/comighod.gif"
];

const guiltText = [
    "you sure?",
    "Really really sure?",
    "Look at this face 🥺",
    "Don't do this to me!",
    "babe please!",
    "You're breaking my heart!"
];

let step = 0;
const totalClicks = guiltText.length; 

noBtn.addEventListener('click', () => {

    if (step < gifs.length) {
        mainGif.src = gifs[step];
    }
    if (step < guiltText.length) {
        noBtn.innerText = guiltText[step];
    }

    
    noBtn.style.backgroundColor = '#9400D3';
    noBtn.style.color = '#ffffff';
    noBtn.style.border = '2px solid #ffffff'; 

    
    noBtn.style.setProperty('position', 'fixed', 'important');
    noBtn.style.setProperty('z-index', '1000', 'important');


    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    if (step < totalClicks - 1) {
        
        const maxX = window.innerWidth - btnWidth - 20; 
        const maxY = window.innerHeight - btnHeight - 20;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        
        noBtn.style.setProperty('left', Math.max(10, randomX) + 'px', 'important');
        noBtn.style.setProperty('top', Math.max(10, randomY) + 'px', 'important');
        
    } else {
        
        const direction = Math.floor(Math.random() * 4);
        
        
        switch(direction) {
            case 0: 
                noBtn.style.setProperty('top', (-btnHeight - 200) + 'px', 'important');
                break;
            case 1: 
                noBtn.style.setProperty('top', (window.innerHeight + 200) + 'px', 'important');
                break;
            case 2: 
                noBtn.style.setProperty('left', (-btnWidth - 200) + 'px', 'important');
                break;
            case 3: 
                noBtn.style.setProperty('left', (window.innerWidth + 200) + 'px', 'important');
                break;
        }

        
        yesBtn.classList.add('yes-glow');
        
        
        setTimeout(() => {
            noBtn.style.display = 'none';
        }, 300);
    }

    step++;
});

yesBtn.addEventListener('click', () => {
    successScreen.style.display = 'flex';

});
