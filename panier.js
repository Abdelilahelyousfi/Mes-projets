let btnPlusAll = document.querySelectorAll('.qty-plus');
let btnMinusAll = document.querySelectorAll('.qty-minus');
let addButton = document.querySelector('#add_button')

btnPlusAll.forEach((btn) => {btn.addEventListener('click', increaseQuantity)});
btnMinusAll.forEach((btn) => {btn.addEventListener('click', decreaseQuantity)});

addButton.addEventListener('click', addArticle);


function increaseQuantity(){
    this.previousElementSibling.value =  parseInt(this.previousElementSibling.value) +1 ;
    subtotal(this);

}


function decreaseQuantity(){
    if( this.nextElementSibling.value > 0){
        this.nextElementSibling.value = parseInt(this.nextElementSibling.value) -1;
        subtotal(this) 
    }
    
}

function subtotal(elt){
    let price = parseInt(elt.parentElement.nextElementSibling.innerText);
    let qty = parseInt(elt.previousElementSibling.value);
    let subt = price*qty;

    elt.parentElement.nextElementSibling.nextElementSibling.innerText = subt + ' €';
}

