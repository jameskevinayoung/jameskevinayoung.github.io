$(function(){

    //javascript
    /**
     * document.getElementById("btn1").addEventListener("click", function(){
        alert("You have clicked btn1")
    });

     */


    //jquery
    $("#btn1").click(function(){
        $("#panel1, #panel3").hide(1500).delay(500).slideDown(1500).slideUp(1500).show(3000);
        $("#panel2, #panel4").hide(1500).delay(500).show(1500).slideUp(1500).slideDown(3000);
    });

    $("#btn2").dblclick(function(){
        $("#panel1, #panel4").hide(1500).fadeIn(3000).fadeOut(3000);
        $("#panel2, #panel3").fadeOut(3000).fadeIn(2500).hide(1500);
    })

    $("#btn3").hover(function(){
        $("#panel1").fadeOut(2000).delay(6000).slideDown(3000);
        $("#panel2").delay(2000).fadeOut(2000).delay(3000).slideDown(3000);
        $("#panel3").delay(4000).fadeOut(2000).delay(2000).slideDown(3000);
        $("#panel4").delay(6000).fadeOut(2000).delay(1000).slideDown(3000);

    });

});