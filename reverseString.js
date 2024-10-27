let str = "sameer";

function revereseAString(str) {
  let nstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    nstr += str[i]
  }

  return nstr;
}

console.log(revereseAString(str));
