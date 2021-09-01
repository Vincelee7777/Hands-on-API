// Async Await
document.querySelector("#load-btn").addEventListener('click', async function() {
    let response = await axios.get("file1.txt")
    console.log(response.data)
    let response2 = await  axios.get("file2.txt")
    console.log(response2.data)
    document.querySelector('#content').value= response.data + response2.data

// let sequence1=await response
// let sequence2=await response2
// let file1=sequence1.data
// let file2=sequence2.data

// document.querySelector('#content').value=file1+file2
// console.log(response.data)
})
// .then() => Promises
// document.querySelector('#btn-load').addEventListener('click', function() {
//     let response = axios.get("file1.txt").then(function() {
//         console.log(response.data)
//     })

// })
