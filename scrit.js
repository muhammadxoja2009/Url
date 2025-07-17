const input=document.getElementById("input");
const btn=document.getElementById("btn");
const ul=document.getElementById("ul");

async function view(ism){
   const response= await fetch( `https://api.nationalize.io/?name=${ism}`);
   const data=await response.json();
   data.country.map(e=>{
    const li =document.createElement('li');
    li.innerHTML=`
     <img src="https://flagcdn.com/16x12/${e.country_id.toLowerCase()}.png" alt=""> ${e.country_id} - ${(e.probability*100).toFixed(2)}%
    `
    ul.appendChild(li);
   })
   
}

btn.addEventListener("click",	()=>{
    view(input.value)
})








