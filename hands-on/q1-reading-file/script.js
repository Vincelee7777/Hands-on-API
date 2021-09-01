

document.querySelector('#load-btn').addEventListener('click', async function(){
    
    await axios.get('contact.txt').then(function(response){
        console.log("File loading is done")
        document.querySelector('div#content').innerHTML = response.data;
            
        
    });  
})

