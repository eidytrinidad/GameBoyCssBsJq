$(function () {


    var btn=$("#btn");
   
    btn.on("click",function () {
        
     
        var nintendo=$(".nintendo");
        var Audio = $('#sonido')[0]; 

        if ($(this).text()=="Encender") {
            console.log("Encendido");

          
            $(this).attr("class","btn btn-danger mt-4");

            $("i").css({
                opacity:1,
             });

            $(this).text("Apagar");
            nintendo.show();
            nintendo.animate({
                marginTop: "65px"
            },3000,function () {
                Audio.play();
            });
        } 
        else if ($(this).text()=="Apagar")  {
            console.log("Apagado");
            nintendo.hide();
            nintendo.css({
                marginTop:0
            })
            $(this).attr("class","btn btn-secondary mt-4");

            $("i").css({
                opacity:0.2,
             });

            $(this).text("Encender")
        }
        
    });

})