var generated = document.getElementById("numberGenerated");

function generate() {
    min = Number(input_min.value);
    max = Number(input_max.value);
    generated = parseInt(Math.floor(Math.random() * (max - min) + min));
}


