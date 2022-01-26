// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
function checkForFactor (base, factor) {
    if (base < 1) {
      return false
    } else if (base % factor === 0) {
        return true
    } else {
        return false
    }
}

console.log(checkForFactor(8, 3));