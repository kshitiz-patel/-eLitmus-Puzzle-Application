$(document).ready(function(){
    $(window).scroll(function(){
    var positiontop=$(document).scrollTop()
    console.log(positiontop);
    if(positiontop>100){
     var abs=document.getElementById("hidden");
     abs.classList.remove("hid");
    }else if(positiontop<300){
     var abs=document.getElementById("hidden");
     abs.classList.add("hid");
    }
    
    });
    });
    $(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()>100);
    })
    