AFRAME.registerComponent("drive",{
    init(){
        this.control()
    },
    control(){
        var rotacion = 0
        window.addEventListener("keydown",function(e){
            var volan=document.querySelector("#volante1")
            if(e.code == "ArrowRight" && rotacion>-40){
                rotacion-=5
                volan.setAttribute("rotation", {x:0, y:0, z:rotacion})
            }
            if(e.code == "ArrowLeft" && rotacion<40){
                rotacion+=5
                volan.setAttribute("rotation", {x:0, y:0, z:rotacion})
            }
            var camara=document.querySelector("#camaras")
            var rotacion=camara.getAttribute("rotation")
            var posicion=camara.getAttribute("position")
            var movimiento=camara.getAttribute("movement-controls")
            camara.setAttribute("movement-controls", {"speed":movimiento.speed+0.05})
        })
    }
    
})



































