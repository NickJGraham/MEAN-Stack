x = [1,2,5,7,9]
y = [2,3,4,6,7]
function combine(arr1, arr2){
    for(let i=0; i <arr2.length; i++){
        let currentVal = arr2[i]
        arr1.push(currentVal)
        // console.log(arr1)
        for(let j=1; j<arr1.length; j++){
            let prev = j-1
            let temp = arr1[j]
            while(prev >= 0 && arr1[prev]  > temp){
                arr1[prev + 1] = arr1[prev]
                prev-- 
            }
            arr1[prev + 1] = temp
        }
    }return arr1
}