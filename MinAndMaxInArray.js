function minmax(nums){
    let max = nums[0];
    let min = nums[0];

    for(let i=0; i<nums.length; i++){
        if(nums[i]>max) max=nums[i];
        if(nums[i]<min) min=nums[i];
    }

    return {max,min};
}

console.log(minmax([40,20,10,57,39,83,27]));