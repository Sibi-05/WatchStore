let cartPro=JSON.parse(localStorage.getItem('key'))||[];
const prise=document.querySelector('#pris');
const dipcon=document.querySelector('#disp');
let tot=0;
let mer=JSON.parse(localStorage.getItem('ke'));

 function displayList(){
  
  console.log(cartPro);
      cartPro.forEach(element => {
        let divs= ` 
        <div class="container col-10 mt-5 border d-flex">
        <div class="row col-md-2 col-sm-4 col-4 p-2 text-center justify-content-center">
          <img src="${element.img}" class="img-fluid p-2 rounded shadow " alt="Product Image">
        </div>
        <div class="col-md-4 col-9 mt-2 ms-2 p-2">
          <h2>${element.name}</h2>
          <p><strong>Price: $</strong>${element.prize}</p>
          <p>Quantity : 1</p>
          <button onclick="remove(${element.id})">remove</button>
        </div>
    </div>`;
        let newDiv=document.createElement('div');
        newDiv.className='row';
        newDiv.innerHTML=divs;
        dipcon.appendChild(newDiv);
    
      });
      total(); 
}

function remove(proId){
  mer--;
 let pro=cartPro.map(p => p.id);
 let index=pro.findIndex(item => item === proId);
 console.log(pro);
 if (index !== -1) {
     // tot -= cart[index].price;
     cartPro.splice(index, 1);
     localStorage.removeItem('key')
 }
else{
 dipcon.textContent="your cart is empty";
}
dipcon.innerHTML = "";
 displayList();
 total();
}


function total(){
   let tik= cartPro.map((cur)=>{
        return cur.prize++;
    }).reduce((acc,cur)=>{
        return acc+cur;
    },0);
    if(tik == Error){
      prise.innerHTML=0;
    }
    else{
    prise.innerHTML=`$${Math.floor(tik)}`;
    }
};
function name(){
let ver =cartPro.length;
console.log(cartPro.length)
localStorage.setItem('ke',JSON.stringify(ver));
}