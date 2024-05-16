function clickNumber(num) {
    document.getElementById('in').value += num;
}

function reset() {
    document.getElementById('in').value = '';
}

function del() {
    let input = document.getElementById('in').value;
    document.getElementById('in').value = input.slice(0, -1);
}

function calculate() {
    let input = document.getElementById('in').value;
    let result;
    try {
        result = eval(input);
        document.getElementById('in').value = result;
    } catch (error) {
        document.getElementById('in').value = 'Error';
    }
}