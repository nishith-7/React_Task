function fizzbuzz(N){
    //to deal with negative numbers
    if (N < 0) {
        N = N * -1;
    }
    // we create two counter variables to count occurences of three and five
    let countthree = 0;
    let countfive = 0;
    console.log(0);
    for (let i = 1; i<N; i++) {
        countthree++;
        countfive++;

        // here we set a logic for count of 15 and its occurences
        if (countfive === 5 && countthree === 3) {
            console.log("FIZZBUZZ");
            countfive = 0;
            countthree = 0;
        }
        else if (countthree === 3) {
            console.log("FIZZ");
            countthree = 0;
        }
        else if (countfive===5) {
            console.log("BUZZ");
            countfive = 0;
        }
        else{
        console.log(i);
        }  
    }
}

fizzbuzz(-30);