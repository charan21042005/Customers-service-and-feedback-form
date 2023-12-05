
const stars = document.querySelectorAll('.stars i');
const card = document.querySelector('.card');

stars.forEach(function(star) {
    star.addEventListener('mouseover', function() {
        card.className = `card ${this.id}`
    })
});

