

const cnt=document.querySelector("#count");

const adbtn= document.querySelector("#abtn");

let mer=JSON.parse(localStorage.getItem('ke'));

let fetchData = async function (){
  const response = await fetch('main.json');
      const data = await response.json();
      return data;
}
     let cart =[];
     let total=0;
   async function displayCont(){
    const list=document.querySelector("#buying");
    let products=await fetchData();
      const order=products.map((cur,i) => { 
        let rate=`<i class="bi bi-star-fill"></i>`; 
        let ratingStars = '';
          for(let k=1;k<=cur.rating;k++){
            ratingStars += rate;
            };
            
        let html=`<div class="card border-1 border-4 border-black "><div class="card-content text-center py-4"><div class="img "><img src="${cur.img}" alt="wim${[i]} cover" class="w-75 img-fluid rounded shadow"><span><div class="rev text-end mt-2 me-3">${ratingStars}${cur.rating}</div></span></div><div><h4 class="card-title text-start mt-2 mx-3">${cur.name}</h4></div><p class="lead card-subtitle text-start mx-3 ">${cur.brand}</p><p class="lead card-subtitle text-start mx-3 ">Type : ${cur.type}</p><p class="display-5 fw-bold my-4 text-black">$${cur.prize}</p><button id="abtn" onclick="addToBag(${cur.id})" class="btn bg-white border-secondary mt-3">Add To <i class="bi bi-bag"></i></button></div></div>`;
       const divison=document.createElement('div');
       divison.className="col-8 col-lg-4 col-xl-3 ";
        divison.innerHTML = html;
        list.appendChild(divison);
        
      });

    }
      

async function addToBag(proid){
  let products=await fetchData();
  let pro=products.find(p => p.id == proid);
console.log(pro);
cart.push(pro);
console.log(cart);
localStorage.setItem('key',JSON.stringify(cart));
// cnt.textContent=cart.length;
licnt();
}

displayCont();
licnt();
function licnt(){
   cnt.textContent=cart.length;
}

console.log(mer)
