
getPrimes(10);
function getPrimes(n){
for (var counter = 0; counter <= n; counter++) {

    var isnotPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            isnotPrime = true;
        }
    }
    if (isnotPrime === false) {
                console.log(counter);
    }
    
}}
