
var removeCartItemButtons = document.getElementsByClassName("btn-danger")
console.log(removeCartItemButtons)
for(var i=0; i< removeCartItemButtons.length ; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click',removeaCartItem)
}
function updateCartTotal(){
    var CartItemContainer = document.getElementsByClassName("cart-items")[0]
    var cartRows = CartItemContainer.getElementsByClassName("cart-row")
    var total=0
        for(var i=0; i< cartRows.length ; i++){
            var cartRow = cartRows[i]
            var priceElement = cartRow.getElementsByClassName("cart-price")[0]
            var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0]
            var price = parseFloat(priceElement.innerText.replace('EGP ', ''))
            var quanitiy = quantityElement.value
            total += (price* quanitiy)
        }
        total = Math.round(total*100)/100
        document.getElementsByClassName("cart-total-price")[0].innerText = "EGP "+ total +".00"
}
function removeaCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
function quanitiyChange(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }else{
        updateCartTotal()
    }
}
var quanitiyInputs = document.getElementsByClassName("cart-quantity-input")
for(var i=0; i< quanitiyInputs.length ; i++){
    var input = quanitiyInputs[i]
    input.addEventListener('change', quanitiyChange)
}
var addToCartButtons = document.getElementsByClassName("shop-item-button")
for(var i=0; i< addToCartButtons.length ; i++){
    var button = addToCartButtons[i]
    button.addEventListener("click", addToCartClicked)
}
function addItemToCart(title, price, imageSrc){
    var cartRow = document.createElement('div')
    var cartItems = document.getElementsByClassName("cart-items")[0]
    var cartItemNames = cartItems.getElementsByClassName("cart-item-title")
    for(var i=0; i<cartItemNames.length; i++){
        if(cartItemNames[i].innerHTML == title){
            alert("this Item is already added to the cart")
            return
        }
    }
    var cartRowContent = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>
    `
    cartRow.innerHTML = cartRowContent
    cartRow.classList.add("cart-row")
    cartItems.append(cartRow)
    cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click",removeaCartItem)
    cartRow.getElementsByClassName("cart-quantity-input") [0].addEventListener("change",quanitiyChange)
}
function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText
    var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText
    var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src
    console.log(title, price, imageSrc)
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}
function purchaseClicked(){
    alert("thank u for ur pushase :) ")
    var cartItems = document.getElementsByClassName("cart-items")[0]
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    console.log("hhhhh")
    document.getElementsByClassName("cart-total-price")[0].innerText = "$0"
    updateCartTotal()
}
document.getElementsByClassName("btn-purchase")[0].addEventListener("click", purchaseClicked)
