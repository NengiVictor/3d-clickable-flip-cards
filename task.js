const cardInner = document.querySelector('.card-inner')

cardInner.addEventListener('click', function() {
    cardInner.classList.toggle('flipped');
})