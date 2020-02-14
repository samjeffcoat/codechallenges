function equalizeArray(arr) {
    //obj = {}, [1,2,2,3]
    //{'1': 1, '2': 2, '3':1}
    // creates an object
    let obj = {}
    //loop through our array, gives each element of numbers in the array
    for (let i of arr) {
        if (obj[i]) {
            // if the object is there, increment by one
            obj[i] ++
        } else {
            // insert the key with assigne value of 1 since it wasnt there
            obj[i] =1
        }
    }

    // gets all the values of our new object
    const newArr = Object.values(obj)//[1,2,1] in our example since these are the numbers in our array

    //

    //Finds the max value of our array
    const max = Math.max(...newArr)

    //
    return arr.length - max
}



console.log(equalizeArray([3,3,2,1,3]))