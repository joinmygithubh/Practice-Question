function previousGreaterElementBruteForce(n, arr) {
    let res = [-1]; // First element has no previous greater element

    for (let i = 1; i < n; i++) {
        let found = false;

        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[i]) {
                res.push(arr[j]); // Push the first greater element found
                found = true;
                break;
            }
        }

        if (!found) {
            res.push(-1); // If no greater element found, push -1
        }
    }

    console.log(res);
}

// Example Usage
let arr = [10, 4, 2, 20, 40];
previousGreaterElementBruteForce(5, arr);
