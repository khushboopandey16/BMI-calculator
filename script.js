let button = document.querySelector('#btn');
button.addEventListener('click', () => {
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const output = document.querySelector('#result_show');
    let bool_height = false;
    let bool_weight = false;
    if (height === '' || isNaN(height) || (height <= 0)) {
        document.querySelector('#height_msg').innerHTML = "Not a Valid height"
    }
    else {
        document.querySelector("#height_msg").innerHTML = " ";
        bool_height = true;

    }
    if (weight === ' ' || isNaN(weight) || (weight <= 0)) {
        document.querySelector('#weight_msg').innerHTML = " Not a valid weight"
    }
    else {
        document.querySelector("#weight_msg").innerHTML = ' ';
        bool_weight = true;
    }
    if (weight && height) {
        const bmi = (weight / (height * height / 10000)).toFixed(2);
        if (bmi < 18.6) {
            output.innerHTML = 'Under weight' + ' ' + bmi;
        }
        else if (bmi >= 18.6 && bmi < 24.9) {
            output.innerHTML = 'Normal Weight' + ' ' + bmi;
        }
        else {
            output.innerHTML = 'Over Weight' + '  ' + bmi;
        }
    }
    else {
        alert('Fill Appropriate Data');
        output.innerHTML = '';
    }
})

