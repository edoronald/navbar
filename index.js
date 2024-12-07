const menu = document.querySelector('.menu-icon')
const dropdown = document.querySelector('.dropdown')

menu.addEventListener("click", function(){
    if(!dropdown.classList.contains('active')){
        dropdown.classList.add('active')
        menu.innerHTML = 'close'
    }else{
        dropdown.classList.remove('active')
        menu.innerHTML = 'more_horiz'
    }
})
