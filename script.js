const home_nav = document.getElementById('home-nav')
const products_nav = document.getElementById('products-nav')
const cart_nav = document.getElementById('cart-nav')

const home_section = document.getElementById('home')
const products_section = document.getElementById('products')
const cart_section = document.getElementById('cart')

home_nav.addEventListener('click', function(){
    home_section.style.display = "block"
    cart_section.style.display = "none"
    products_section.style.display = "none"
})

products_nav.addEventListener('click', function(){
    products_section.style.display = "block"
    home_section.style.display = "none"
    cart_section.style.display = "none"
})

cart_nav.addEventListener('click', function(){
    cart_section.style.display = "block"
    home_section.style.display = "none"
    products_section.style.display = "none"
})