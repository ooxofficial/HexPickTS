document.getElementById("out").innerHTML = `<h1>#000000</h1>`;
const colorInput = document.getElementById("color");
const submit = document.getElementById("submit");
submit.onclick = function () {
    const color = (colorInput.value);
    document.getElementById("out").innerHTML = `<h1 style="color: ${color};">${color}</h1>`;
};
