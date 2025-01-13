function twoArrayAndPhrase(n, m, matrix) {
    let count = 0;

    // Horizontal search
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= m - 4; j++) {
            if (
                matrix[i][j] === "s" &&
                matrix[i][j + 1] === "a" &&
                matrix[i][j + 2] === "b" &&
                matrix[i][j + 3] === "a"
            ) {
                count++;
            }
        }
    }

    // Vertical search
    for (let j = 0; j < m; j++) {
        for (let i = 0; i <= n - 4; i++) {
            if (
                matrix[i][j] === "s" &&
                matrix[i + 1][j] === "a" &&
                matrix[i + 2][j] === "b" &&
                matrix[i + 3][j] === "a"
            ) {
                count++;
            }
        }
    }

    // Diagonal (top-left to bottom-right) search
    for (let i = 0; i <= n - 4; i++) {
        for (let j = 0; j <= m - 4; j++) {
            if (
                matrix[i][j] === "s" &&
                matrix[i + 1][j + 1] === "a" &&
                matrix[i + 2][j + 2] === "b" &&
                matrix[i + 3][j + 3] === "a"
            ) {
                count++;
            }
        }
    }

    // Diagonal (top-right to bottom-left) search
    for (let i = 0; i <= n - 4; i++) {
        for (let j = 3; j < m; j++) {
            if (
                matrix[i][j] === "s" &&
                matrix[i + 1][j - 1] === "a" &&
                matrix[i + 2][j - 2] === "b" &&
                matrix[i + 3][j - 3] === "a"
            ) {
                count++;
            }
        }
    }

    console.log(count);
}

let n=5
let m=5
let matrix =[
    ["safer"],
    ["amjad"],
    ["babol"],
    ["aaron"],
    ["songs"]
]
twoArrayAndPhrase(n,m, matrix)