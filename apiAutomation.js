let axios = require('axios')

let BASE_url = 'https://jsonplaceholder.typicode.com/posts'

async function apiTesting(){
    try {
        let res = await axios.get(BASE_url)
        console.log("Title of the first post:" , res.data[0].title);

        let newPost = {
            title: 'New post',
            body : "Testing automated api testing" ,
            userId : 123
        }
        let newPost2 = {
            title: 'New post',
            body : "Testing automated api testing" ,
            userId : 124
        }
        let postResponse  = await axios.post(BASE_url, newPost, newPost2);
        console.log("Response from the post", postResponse.data)

    } catch (error) {
        console.error('Error occured while testing the API', error.message)
    }
}

apiTesting()