document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.post__rating input[type="radio"]');
    
    stars.forEach(star => {
        star.addEventListener('change', function () {
            const rating = this.value;
            console.log(`Rating seleccionado: ${rating} estrellas`);
            // código para enviar el rating a el servidor
        });
    });
});
