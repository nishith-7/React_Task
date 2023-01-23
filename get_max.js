const num = [20,10,20,4,100];
function getMax(num){
    for(let i = 0;i<num.length;i++) {
        var temp = num[i];
        if(temp >= num[i+1]) {
             temp = num[i];
        }
    }
    return temp;

}

console.log(getMax(num));