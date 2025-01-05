function zTraversal(N, arr) {
    let result = [];

    // Top row
    for (let i = 0; i < N; i++) {
        result.push(arr[0][i]);
    }

    // Diagonal (excluding first and last elements)
    for (let i = 1; i < N - 1; i++) {
        result.push(arr[i][N - 1 - i]);
    }

    // Bottom row
    for (let i = 0; i < N; i++) {
        result.push(arr[N - 1][i]);
    }

    console.log(result.join(" "));
}

