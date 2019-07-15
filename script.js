$(document).ready(function(){

    // Slide Show

    $("img").click(function(){
        if($(".popup").css("display") == "block"){
            $(".popup").css("display", "none");            
            $('img')[1].src = "";
        } else{
            $(".popup").css("display", "block");

            //animation;
            $(".popup").fadeOut(0);
            $(".popup").fadeIn(250);

            $('img')[1].src = $('img')[0].src;
        }
    })

    $('img')[0].src = "foto1.png";

    var fotoNum;
    var local;
    var tam = 4;
    var valor = 1;

    $('.ant').click(function(){
        local = $('img')[0].src;
        resultado = local.split('.');
        tam = resultado[0].length - 1;
        valor--;

        if(valor == 0){
            fotoNum = "foto" + 5 + ".png";
            valor = 5;
        } else fotoNum = "foto" + (parseInt(resultado[0][tam]) - 1) + ".png";
        console.log(valor);    
                        
        //animation;  
        $("img").fadeOut(0);
        $("img").fadeIn();

        $('img')[0].src = fotoNum;    
        
    })

    $('.prox').click(function(){                 
        local = $('img')[0].src;
        resultado = local.split('.');
        tam = resultado[0].length - 1;
        valor++;

        if(valor == 6){
            fotoNum = "foto" + 1 + ".png";
            valor = 1;
        } else fotoNum = "foto" + (parseInt(resultado[0][tam]) + 1) + ".png";
        console.log(valor);          

        //animation;                
        $("img").fadeOut(0);
        $("img").fadeIn(300);

        $('img')[0].src = fotoNum;
        
        
    })

    // Viewport
    $(window).resize(function(){
        if ($(window).width() < 860) {
            //$(".ant").text(&nbsp);
        }
    })
  })
