function walkInThePark(N, M, grid) {
  let directions = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1]
  };

  let visited = [];
  for (let i = 0; i < N; i++) {
    visited[i] = [];
    for (let j = 0; j < M; j++) {
      visited[i][j] = false;
    }
  }

  let x = 0,
    y = 0;
  let steps = 0;
  visited[x][y] = true;

  while (true) {
    const move = grid[x][y];
    const [dx, dy] = directions[move];
    x += dx;
    y += dy;
    steps++;

    if (x < 0 || y < 0 || x >= N || y >= M) break;
    if (visited[x][y]) break;

    visited[x][y] = true;
  }
  console.log(steps);
}

let N=3;
let M=4;
let grid =[["R","R","D","R"],["L","L","U","D"],["L","L","L","L"]]

walkInThePark(N,M,grid)