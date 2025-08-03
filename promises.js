function fetchData(){
    return new Promise((resolve, reject)=>{
        let fetchData = false
        if(fetchData){
             resolve('Data fetch Successfully')
        }
        else{
            reject('something went wrong')
        }
    })
}


let promise = fetchData()
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})