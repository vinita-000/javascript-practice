function sum(nums){
    let total = 0;
    for(let i=0; i<nums.length; i++){
        total += nums[i];
    }
    return total;
}
console.log(sum([4,2,7,12,76,89,0]));