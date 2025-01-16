const form = document.getElementById('form');
const result = document.getElementById('result');
const formBtn = document.getElementById('formBtn');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const queryParams = new URLSearchParams(formData).toString();
    result.style.display = "block";
    result.innerHTML = "just a sec.."
    
    fetch('https://script.google.com/macros/s/AKfycby_mfHVWZjbDX9PVBciXLNWPPW4F-wdoCN1FuvF5DXhYbFp0td0kU-TqSdcMf9-jB3s/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: queryParams
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

popForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('submitted');
    const formData = new FormData(popForm);
    const queryParams = new URLSearchParams(formData).toString();
    popResult.style.display = "block";
    popResult.innerHTML = "just a sec.."

    fetch('https://script.google.com/macros/s/AKfycby_mfHVWZjbDX9PVBciXLNWPPW4F-wdoCN1FuvF5DXhYbFp0td0kU-TqSdcMf9-jB3s/exec', {
        method: 'POST',
        headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: queryParams
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