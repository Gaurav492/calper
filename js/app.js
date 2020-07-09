let spi = document.getElementById('spi');

let submit = document.getElementById('submit');

let display = document.getElementById('per');

let errDisplay = document.querySelector('#err');


submit.addEventListener('click', process);


function process(){

    let value = spi.value;

    if (value == '') {
        showError();
    } else {
        let lastValue = (value - 0.5) * 10;

        display.textContent = `${lastValue} %`;
    }

}

function showError() {
    errDisplay.style.display = 'block';

    setTimeout(clearError, 2000);
}

function clearError(){
   errDisplay.style.display = 'none';
  }







