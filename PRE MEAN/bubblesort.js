function bubbleSort(arr){
    for(let i = 0; i < arr.length-1; i++){
        for (let j = 0; j < arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        }
        console.log(arr)
    }

console.log(bubbleSort([1,4,8,5,2,3,7,6]));

// #1 
function printArray(arr){
        for(var i=0; i<arr.length; i++){
            console.log(arr[i]);
        }
    }
// O Notation: O(n)

// #2
function findNth(arr, n){
        console.log(arr[n]);
    }
// Notation: O(1)

// #3
function halving(n){
        var count = 0;
        while(n > 1){
            n = n/2;
            count++;
        }
        return count;
    }
// Notation: 0(n)

// #4
function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}
// Notation: O(n2)