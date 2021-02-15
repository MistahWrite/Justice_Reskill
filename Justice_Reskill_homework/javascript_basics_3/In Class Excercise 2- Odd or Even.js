var nums = [1, 3, 2, 5, 8, 9, 6, 24, 34, 65];

for(var i=0; i < nums.length; i++) {
     // if remainder is 1 then it's odd
    if (nums[i] % 2 == 1) {
        console.log(nums[i] + " Odd");
    } else {
        console.log(nums[i] + " Even");
    }
}