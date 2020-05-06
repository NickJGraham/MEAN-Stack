function binarySearch(arr, value){
    var min = 0;
    var max = arr.length-1;
    var current;
    var currentValue;
    while (min <= max){
        current = Math.floor((min+max)/2);
        currentValue = arr[current];
        if(currentValue < value){
            min = current + 1;
        }
        else if(currentValue > value){
            max = current - 1;
        }
        else{
            return current;
        }
    }
    return -1;
}
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93));
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15));