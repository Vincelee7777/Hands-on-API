document.querySelector('#load-users-btn').addEventListener('click', async function(){
        let response=await axios.get('users.json')
        let abc=response.data
        // document.querySelector('#all-users').innerHTML=abc.users
        updateDisplay(abc.users)
        console.log(abc.users)
});

document.querySelector('#button2').addEventListener('click', async function(){
    let response=await axios.get('users.json')
    let abc=response.data
    let text2=document.querySelector('#text')
    // console.log(abc.users[0].userId)
    // document.querySelector('#all-users').innerHTML=abc.users
        
        for (let user of abc.users){
            console.log(parseInt(text2.value)== user.userId)
        if (parseInt(text2.value)== user.userId){
        let htmlSnippet= `<div class="card">
        <div class="card-body">
        <h2 class="card-title">${user.firstName}</h2>
        <h2 class="card-title">${user.lastName}</h2>`
        


        let allusers=document.querySelector('#all-users')
            
            allusers.innerHTML= htmlSnippet
    
        }
    
    
    
    
    
}});

function updateDisplay(users){
    for (let eachuser of users){
        let htmlSnippet= `<div class="card">
        <div class="card-body">
        <h2 class="card-title">${eachuser.firstName}</h2>
        <h2 class="card-title">${eachuser.lastName}</h2>
        <div class="card text">
            <ul>
                <li> E-mail: ${eachuser.emailAddress}</li>
                
            <ul>
        </div>
        </div>
        </div>`


            let allusers=document.querySelector('#all-users');
            allusers.innerHTML+= htmlSnippet
    }
}


