const form = document.getElementById('form');
const result = document.getElementById('result');
const formBtn = document.getElementById('formBtn');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.style.display = "block";
    result.innerHTML = "just a sec.."

    fetch('https://script.google.com/macros/s/AKfycbzg8yfNyLPFdjbAlEdcawTjyLvjhWHaMaMAj4ontGEOdjX2itWrsECq_CHM6nOjf_p_/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "You made it!";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong! Try Again";
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});


const popForm = document.getElementById('popForm');
const popResult = document.getElementById('popResult');
const popFormBtn = document.getElementById('popFormBtn');
// const popup = document.getElementById("popup");

popForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('submitted');
    const formData = new FormData(popForm);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    popResult.style.display = "block";
    popResult.innerHTML = "just a sec.."

    fetch('https://script.google.com/macros/s/AKfycbzg8yfNyLPFdjbAlEdcawTjyLvjhWHaMaMAj4ontGEOdjX2itWrsECq_CHM6nOjf_p_/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                popResult.innerHTML = "You made it!";
            } else {
                console.log(response);
                popResult.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            popResult.innerHTML = "Something went wrong! Try Again";
        })
        .then(function () {
            popForm.reset();
            setTimeout(() => {
                popup.classList.add("hidden");
                popup.classList.add("closed");
                popResult.style.display = "none";
            }, 2000);
        });
});