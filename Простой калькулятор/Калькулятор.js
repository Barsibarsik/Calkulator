var numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    decimalBtn = document.getElementById('decimal'),
    clearBtns = document.querySelectorAll('.clearBtn'),
    // resultBtn = document.getElementById('btnravno'),
    howWorkBtn = document.getElementById('howWorkBtn'),
    calcwindow = document.getElementById('calcwindow'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '',
    operationsList = document.getElementById ('operationsList');



for (var i=0; i<numbers.length; i++) {
    var number = numbers [i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });    
};
 
for (var i=0; i<operations.length; i++) {
    var operationBtn = operations [i];
    operationBtn.addEventListener('click', function (e) {
        operation(e.target.textContent);
    }); 
};   

for (var i=0; i<clearBtns.length; i++) {
    var clearBtn = clearBtns [i];
    clearBtn.addEventListener('click', function (e) {
        clear(e.srcElement.id);
        });     
};  


decimalBtn.addEventListener('click', decimal); 

// resultBtn.addEventListener('click', result); 

howWorkBtn.addEventListener('click', howWork) ; 



function numberPress(number){
    if (MemoryNewNumber) {
        calcwindow.value = number;
        MemoryNewNumber = false;
    } else {
    if (calcwindow.value === '0') {
        calcwindow.value = number;
    } else {
        calcwindow.value += number;
    };
    }; };

function operation(op) {
    var localOperationMemory = calcwindow.value;


    if (MemoryNewNumber && MemoryPendingOperation !== '=') {
        calcwindow.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '*') {
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        } else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        };
        calcwindow.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;
    };
        };

function decimal(argument){
    var localDecimalMemory = calcwindow.value;

    if (MemoryNewNumber) {
        localDecimalMemory = '0.';
        MemoryNewNumber = false;
    } else {
        if (localDecimalMemory.indexOf ('.') === -1) {
        localDecimalMemory += '.';
    }; };

    calcwindow.value = localDecimalMemory;
    };

function clear(id) {
    if (id === 'btnCE') {
        calcwindow.value = '0';
        MemoryNewNumber = true;
    } else if (id === 'btnC') {
        calcwindow.value = '0';
        MemoryNewNumber = true;
        MemoryCurrentNumber = 0;
        MemoryPendingOperation = '';
    };
    
};

function howWork(argument) {
    for (var i=0; i<operations.length; i++) {
        var newLi = document.createElement('li');    
        var operationText = operations[i].value;
        newLi.innerText = operationText;
        operationsList.appendChild(newLi);
    };
};