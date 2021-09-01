
document.querySelector("#load-image-btn").addEventListener('click', async function(){
    
        let response= await axios.get("artwork.json")
        let def=response.data
        console.log(def)
        
  let card=document.createElement('h1')
  let a=document.querySelector("body");
    a.appendChild(card);
    card.innerHTML=def.title
    // let b=document.createElement('img')
    let c=document.querySelector("#artwork")
    // c.appendChild(b);
    console.log(c)
    c.innerHTML="<img src="+ def.image_url + '>'
})



