let WPM = 400;
let currentIndex = 0;

const start = () => {
    let inputBox = document.getElementById("input");
    let data = inputBox.value.split(" ");
    data.unshift("{WPM_" + WPM + "}");
    for (let i = 1; i <= 3; i++) {
        data.unshift(i.toString());
    }
    data.unshift("{WPM_1}");
    console.log(data);
    process(data);
   // animate(data);
}

let process = (data) => setInterval(() => {
    console.log(data[currentIndex]);


    
    

    currentIndex++;
}, 60000/WPM);

// function animate(data) {
//     let animation = document.getElementById("reader");

//     let countdown;
//     let count = 3;
//     animation.innerHTML = count;
//     countdown = setInterval(function() {
//         count--;
//         if (count == 0) {
//             clearInterval(countdown);
//             let index = 0;
//             animation.innerHTML = data[index];
//             let inputAnimation = setInterval(function() {
//                 index++;
//                 if (index == data.length) {
//                     clearInterval(inputAnimation);
//                 } else {
//                     animation.innerHTML = data[index];
//                 }
//             }, 60000/WPM)
//         } else {
//             animation.innerHTML = count;
//         }
//     }, 1000);

// }

start();