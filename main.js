/**
 * 
 * @param {Number} A 
 * @param {Number} B 
 * @param {Number} K 
 */
function solution (A, B, K) {

    if (A < 0 || A > 10e9) {
        throw new Error('The first param must be between [0...2000000000]');
    }

    if (B < 0 || B > 10e9) {
        throw new Error('The second param must be between [0...2000000000]');
    }

    if (B < A) {
        throw new Error('The second param must be bigger than the first.');
    }

    if (K < 1 || K > 10e9) {
        throw new Error('The third param must be between [1...2000000000]');
    }

    // if (B - A == 0) {
    //     return 0;
    // }

    let divCounter = 0;
    let firstNumber = A;
    let C = A;
    while (C <= B) {
        console.log(C)
        if (C % K == 0) {
            console.log("dentro do if")
            firstNumber = C;
            divCounter++;
            break;
        } 
        C++;
    }

    const diff = B - firstNumber;
    console.log(diff, "diff")
    if (diff > 1) {
        const extra = diff % K;
        const extraCount = (diff - extra) / K;
        divCounter += extraCount; 
    }

    // for (let i = 0; i <= B - A; i++) {
    //     if ((A + i) % K == 0) {
    //         divCounter++;
    //     } 
    // }

    return divCounter;

}