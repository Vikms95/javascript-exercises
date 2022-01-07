const fibonacci = function(n){
    let current = 1;
    let storedPrevious = 0;
    let previous = 0;
    if (Math.sign(n) == -1){
        return "OOPS";  
    }
    else
    {
        for (let i = 0; i <= +n - 1; i++) {
            storedPrevious = current;
            current = current + previous;
            previous = storedPrevious;
        }
        return previous;
    }   
};

fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;
