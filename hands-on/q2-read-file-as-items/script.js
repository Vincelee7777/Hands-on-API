let abc=document.querySelector("#load2")
let fruits=[]

document.querySelector("#load").addEventListener('click', async function(){

    await axios.get('items.txt').then(function(response){
        console.log(response.data)
        let content=document.querySelector("ul#content2")
        let article = response.data
        result = article.split(",");
        
        for(let s of result){   
        content.innerHTML += '<li>'+ s + '</li>'
        fruits.push(s)
        
        
        }
    
    });  
})

console.log(fruits)
let n=0
let b=[]
document.querySelector("#load2").addEventListener('click',  function(){

        b=fruits
        
        document.querySelector('#content2').innerHTML += "<li>" +fruits[0]+" </li>" 
        
})

document.querySelector("#load2").addEventListener('click',  function(){

    b=fruits
    
    document.querySelector('#content2').innerHTML += "<li>" +fruits[1]+" </li>" 
    
})