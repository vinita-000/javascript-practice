function secondLargestNum(arr){
    arr.sort((a,b)=>b-a);
    console.log(arr[1]);
}
secondLargestNum([4,1,7,9,2,4,8,5])