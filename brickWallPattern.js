function brickWallPattern(n,m){

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(i==1 || i==3){
                process.stdout.write(" []")
            }
            else{
                process.stdout.write("[] ")
            }
        }
        console.log();
    }

}
brickWallPattern(4,5)