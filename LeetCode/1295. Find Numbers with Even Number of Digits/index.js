var findNumbers = function(nums) {
    return nums.reduce((s, x) => s + (1 - ('' + x).length % 2), 0);

}


console.log(findNumbers([12,345,2,6,7896]))