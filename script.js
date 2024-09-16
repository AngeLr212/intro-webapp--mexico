document.getElementById('slider-green').addEventListener('input', function() {
    const greenValue = parseInt(this.value).toString(16).padStart(2, '0');
    const greenHex = `#${greenValue}9900`;
    document.getElementById('green-code').innerText = greenHex;
    document.getElementById('green-box').style.backgroundColor = greenHex;
});

document.getElementById('slider-red').addEventListener('input', function() {
    const redValue = parseInt(this.value).toString(16).padStart(2, '0');
    const redHex = `#9D${redValue}00`;
    document.getElementById('red-code').innerText = redHex;
    document.getElementById('red-box').style.backgroundColor = redHex;
});
