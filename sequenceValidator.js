function solve(a,b,c,d){
    if((b-a==c-b) && (c-b==d-c)){
      console.log("Arithmetic") 
    }
    else if((b/a==c/b) && (c/b==d/c)){
      console.log("Geometric")
    }
    else{
      console.log("Neither")
    }
}

let a = [2,3,1]
let b = [4,9,2]
let c = [6,27,4]
let d = [8,81,7]

solve(a,b,c,d)