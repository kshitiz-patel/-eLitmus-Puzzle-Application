function f5() {
    var x = document.getElementById("show");
    var x1 = document.getElementById("aud");
    if (x.style.display === "none") {
        
      x.style.display = "block";
      x.innerHTML=" my trophy cabinet gleamed with gold 11 years before I retired when I achieved what has never been achieved and I still stand undefeated."
  
      // var c=a.appendChild(document.createElement('img')).src = 'll.png';
    } else {
      x.style.display = "none";

      // var c=a.removeChild(document.createElement('img')).src = 'll.png';
  
    }
    }
    function f3() {
      var x = document.getElementById("s2");
      if (x.style.display === "none") {
          
        x.style.display = "block";
        x.innerHTML=" Je älter ich werde, desto intensiver lebe ich und desto mehr registriere ich, was ich erreicht habe."
  
        // x.classList.remove("hin")
      //   x.play();
        // var c=a.appendChild(document.createElement('img')).src = 'll.png';
      } else {
        x.style.display = "none";
        // var c=a.removeChild(document.createElement('img')).src = 'll.png';
    
      }
    }
    function f6() {
      var x = document.getElementById("show1");
      if (x.style.display === "none") {
          
        x.style.display = "block";
        x.innerHTML=" Behind every successful man is a woman. You may have stumbled across this man popularly known as the Golden Boy of the said sport in the 90s without realizing that it was someone closely related to him all along."
  
        // x.classList.remove("hin")
      //   x.play();
        // var c=a.appendChild(document.createElement('img')).src = 'll.png';
      } else {
        x.style.display = "none";
        // var c=a.removeChild(document.createElement('img')).src = 'll.png';
    
      }
    }
    function f2(){
      var x = document.getElementById("show");
      var x1 = document.getElementById("aud");

      if (x.style.display === "none") {
          
        x.style.display = "block";
        x.innerHTML="Even though I’m not a native I thought I found my home in the ‘land of kings' but then I had to shift to the space city and finally joined the best leader of the format."
    x1.play();
        // var c=a.appendChild(document.createElement('img')).src = 'll.png';
      } else {
        x.style.display = "none";
  x1.pause();
        // var c=a.removeChild(document.createElement('img')).src = 'll.png';
    
      }
    }   
    function f4(){
      // var x = document.getElementById("show");
      var x = document.getElementById("showa");
      if (x.style.display === "none") {
        x.style.display = "block";
        // x.innerHTML="Hint 1:Even though I’m not a native I thought I found my home in the ‘land of kings' but then I had to shift to the space city and finally joined the best leader of the format."
     x.play();
     x.classList.remove("hin")
      } else {
        x.style.display = "none";
        x.pause();
      
      }
    }
    function f9(){
      var x = document.getElementById("show1");
      if (x.style.display === "none") {
          
        x.style.display = "block";
        x.innerHTML="A game I can never forget. Special night. This man, made me run like in a fitness test This might help you find the destination."
        
  
        // x.classList.remove("hin")
      //   x.play();
        // var c=a.appendChild(document.createElement('img')).src = 'll.png';
      } else {
        x.style.display = "none";
        // var c=a.removeChild(document.createElement('img')).src = 'll.png';
    
      }
    }
        
        const a=document.getElementById("te");
        var b=document.getElementById("he").value;
        // if(b=='suraj'){
        //     a.innerHTML="fail"
        // }
        var a1=document.getElementById("hint11");
    var a2=document.getElementById("hint12");
    var a3=document.getElementById("hint13");
  
    // a1.remove("hint11");
    // a2.remove("hint12");
        var b1=document.getElementById("hint21");
    var b2=document.getElementById("hint22");
    var b3=document.getElementById("hint23");
  
    
    
    // a1.add("hint11")
        const h=()=>{
    
            setTimeout(()=>{
       
    var b=document.getElementById("hint11");
    
    
    
    b.classList.remove("hin")
    
    setTimeout(() => {
           
    var b=document.getElementById("hint12");
    
    
    b.classList.remove("hin")
    setTimeout(()=>{
      var b=document.getElementById("hint13");
    
    
    b.classList.remove("hin")
    },3000)
    },3000);
            },3000)
        }
        h();
        function t(){
          var time=new Date();
          var hr=time.getHours();
          var min=time.getMinutes();
          var sec=time.getSeconds();
          document.getElementById("time").value=`${hr} :${min}:${sec}`
        }