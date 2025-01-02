function removeDuplicates(array) {
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (array[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray.push(array[i]);
        }
    }
    console.log(uniqueArray);
}
let array = [1,1,3,3]



removeDuplicates(array)