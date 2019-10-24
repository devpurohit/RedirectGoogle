let htmlEl = `<div id="two" 
        style="position: fixed;top: 20%;left: 40%;color:red;">
        <h1 style="font-size: 400%;">Countdown</h1>
        <h1 id="timer" style="text-align: center;"></h1>
        <h1 style="text-align: center;">sec</h1>
        </div>`;

document.body.insertAdjacentHTML(
    'beforeend', htmlEl);
for (let i = 5; i > 0; i--) {
    setTimeout(function () {
        document.getElementById('timer').innerHTML = i;
    }, (5 - i) * 1000);
}
