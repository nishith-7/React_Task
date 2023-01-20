
const arr = [-12,11,-13,-5,6,-7,5,-3,-6];

//we declare an extra array to store the result
const res = [];

//function to rearrange the elements
function rearrange(arr) {

    for(let i = 0;i < arr.length;i++) {

        if (arr[i] < 0) {

            res.unshift(arr[i]);

        } else if (arr[i] > 0) {

            res.push(arr[i]);

        }

    }

    return res;
}

console.log(rearrange(arr));
 
