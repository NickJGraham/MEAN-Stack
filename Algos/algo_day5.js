//Partition, starting at index 0.

function partition(arr){
    // Pivot needs to start at arr[0]
        let pivot= arr[0];
        for(let i=1;i<arr.length-1;i++){ 
            if(arr[i]<pivot){
                [arr[i],pivot]=[pivot,arr[i]];
                pivot=arr[i]
            }
            if(arr[i]>pivot){
                
            }
        }
    return arr;
}
console.log(partition([5,4]));
//Want to swap the numbers starting with arr[0] as the pivot, so we need to loop through starting from arr[0] 
//and then check if it's less than the next number?
// I think we just need to fix inside the if statement to make sure it swaps, I don't know how line 8 is supposed to work
//we dont have return staatement lol try it now
// [5, 5, 9, 4, 5, 3] thats what I got back, so it only changed two of the numbers, I think pivot needs to update as it goes through