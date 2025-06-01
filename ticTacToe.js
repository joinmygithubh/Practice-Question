function ticTacToe(matrix) {
  let isX = check(matrix, "x");
  let isO = check(matrix, "o");

  if (isX === false && isO === false) {
    console.log("Tie");
  } else if (isX === true) {
    console.log("x");
  } else {
    console.log("o");
  }
  function check(matrix, char) {
    for (let i = 0; i < matrix.length; i++) {
      if (
        matrix[i][0] === char &&
        matrix[i][1] === char &&
        matrix[i][2] === char
      ) {
        return 
        true;
      }
      
      if (
        matrix[0][i] === char &&
        matrix[1][i] === char &&
        matrix[2][i] === char
      ) {
        return true;
      }
    }
    if (
      matrix[0][0] === char &&
      matrix[1][1] === char &&
      matrix[2][2] === char
    ) {
      return true;
    }
    if (
      matrix[0][2] === char &&
      matrix[1][1] === char &&
      matrix[2][0] === char
    ) {
      return true;
    }
    return false;
  }
}
let matrix =[
["x", "o", "x"],
["o", "x", "x"],
["o", "o", "o"]
]
ticTacToe(matrix)