const progress = document.querySelector('.input__control-progress');

progress.addEventListener('input', function () {
    const value = this.value;
    this.style.background =
        `linear-gradient(to right, #ff0000 0%, #ff0000 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
})

const vollvl = document.querySelector('.input__control-vol');

vollvl.addEventListener('input', function () {
    const value = this.value;
    this.style.background =
        `linear-gradient(to right, #ff0000 0%, #ff0000 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
})



