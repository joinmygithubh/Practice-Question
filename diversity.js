function runProgram(input) {
    let lines = input.trim().split("\n");
    let t = parseInt(lines[0]); 
    let index = 1;

    while (t--) {
        let [n, k] = lines[index].split(" ").map(Number);  
        let incomes = lines[index + 1].split(" ").map(Number);
        index += 2;

        incomes.sort((a, b) => a - b);

        let maxFamilies = 1; 
        let left = 0;

        for (let right = 0; right < n; right++) {
            while (incomes[right] - incomes[left] > k) {
                left++;
            }
            maxFamilies = Math.max(maxFamilies, right - left + 1);
        }
        console.log(maxFamilies);
    }
}