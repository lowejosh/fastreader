const WPM = 500;

function start() {
    let inputBox = document.getElementById("input");
    let data = inputBox.value.split(" ");
    animate(data);
}

function animate(data) {
    let animation = document.getElementById("reader");

    let countdown;
    let count = 3;
    animation.innerHTML = count;
    countdown = setInterval(function() {
        count--;
        if (count == 0) {
            clearInterval(countdown);
            let index = 0;
            animation.innerHTML = data[index];
            let inputAnimation = setInterval(function() {
                index++;
                if (index == data.length) {
                    clearInterval(inputAnimation);
                } else {
                    animation.innerHTML = data[index];
                }
            }, 60000/WPM)
        } else {
            animation.innerHTML = count;
        }
    }, 1000);

}
