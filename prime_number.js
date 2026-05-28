/**
 * Implement the solution in this function
 *
 * @param {number} n Examine this number
 * @returns {boolean} True if n is prime and false otherwise
 */
function isPrime (n) {
    if(n<=1){
        return false;
    }
    for(i=2;i<n;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}