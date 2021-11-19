const menu = document.getElementsByClassName("menu")[0];
const navbar = document.getElementsByClassName("nav__bar")[0];
const btnMenu = document.getElementById("btnMenu");
let abierto = false

const toggleMenu = () =>{
    menu.classList.toggle("mostrar");
    menu.styles.transition = "transform 0.3s ease-in-out";
}

btnMenu.addEventListener("click", function(){
    toggleMenu();
    if(document.querySelector(".menu.mostrar")){
        abierto=true;
    }else{
        abierto=false;
    }
})

window.addEventListener("click", function(e){
    this.ondeviceorientationabsolute.log(e.targer)
    if(abierto){
        if(e.target !== btnMenu){
            toggleMenu();
            abierto=false
        }
    }
})

window.addEventListener("resize", function(){
    if(screen.width > 800){
        if(abierto){
            toggleMenu();
            enlaces.styles.transition = "none";
            abierto=false;
        }
    }
})