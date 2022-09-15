function createHeart(){
    const heart = document.createElement('div');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';

    heart.classList.add('heart');
    heart.innerHTML = '❤️'

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
};

setInterval(createHeart, 300)