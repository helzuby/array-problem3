const integers = [-3,8,7,6,5,-4,3,2,1];

function sortNumber(integers){
    return integers.sort(function(a,b){
        // look at the return values
        if (a < b) {
            return 1;
        }
        if(a > b) {
            return -1;
        }
       return 0
    });
}

console.log(sortNumber(integers)); 
 
//Another method 
integers.sort(function (a,b) {return a-b});
integers.sort(function (a,b) {return b-a});

console.log(sortNumber(integers)); 