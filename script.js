// --- Background Animation ---
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
setInterval(createHeart, 600);

// --- Interaction Logic ---
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainGif = document.getElementById('mainGif');
const successScreen = document.getElementById('successScreen');
const gifArea = document.querySelector('.gif-area');

// Adjust gif-area height dynamically
mainGif.onload = () => {
    if (mainGif.height > 0) {
        gifArea.style.height = mainGif.height + 'px';
    }
};

// Make sure these match your files in the 'gif' folder!
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
    // 1. Update Content
    if (step < gifs.length) {
        mainGif.src = gifs[step];
    }
    if (step < guiltText.length) {
        noBtn.innerText = guiltText[step];
    }

    // 2. CHANGE COLOR ON CLICK (Rich Violet)
    noBtn.style.backgroundColor = '#9400D3';
    noBtn.style.color = '#ffffff';
    noBtn.style.border = '2px solid #ffffff'; // Add white border to make it pop

    // 3. FORCE POSITION FIXED
    noBtn.style.setProperty('position', 'fixed', 'important');
    noBtn.style.setProperty('z-index', '1000', 'important');

    // 4. CHAOTIC MOVEMENT LOGIC
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    if (step < totalClicks - 1) {
        // == THE CHASE (Scatter INSIDE the frame) ==
        const maxX = window.innerWidth - btnWidth - 20; 
        const maxY = window.innerHeight - btnHeight - 20;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        // Use setProperty with 'important' to force the move
        noBtn.style.setProperty('left', Math.max(10, randomX) + 'px', 'important');
        noBtn.style.setProperty('top', Math.max(10, randomY) + 'px', 'important');
        
    } else {
        // == THE ESCAPE (Move OUT of frame) ==
        const direction = Math.floor(Math.random() * 4);
        
        // Move it 200px outside the current viewport
        switch(direction) {
            case 0: // Throw UP
                noBtn.style.setProperty('top', (-btnHeight - 200) + 'px', 'important');
                break;
            case 1: // Throw DOWN
                noBtn.style.setProperty('top', (window.innerHeight + 200) + 'px', 'important');
                break;
            case 2: // Throw LEFT
                noBtn.style.setProperty('left', (-btnWidth - 200) + 'px', 'important');
                break;
            case 3: // Throw RIGHT
                noBtn.style.setProperty('left', (window.innerWidth + 200) + 'px', 'important');
                break;
        }

        // Highlight the YES button
        yesBtn.classList.add('yes-glow');
        
        // Hide it after a split second
        setTimeout(() => {
            noBtn.style.display = 'none';
        }, 300);
    }

    step++;
});

yesBtn.addEventListener('click', () => {
    successScreen.style.display = 'flex';
});