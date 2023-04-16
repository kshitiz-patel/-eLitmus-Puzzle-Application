function f5() {
    var x = document.getElementById("show");
    var x1 = document.getElementById("aud");
    if (x.style.display === "none") {
        
      x.style.display = "block";
      x.innerHTML=" We knew this day would arrive,  Heavy moment of our lives; You pulled down the curtain gracefully,  You were king where we fought so proudly;  Your final wave all four disappear,  Within the hush of silent tear."
  
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
        x.innerHTML=" If you can't decipher it on your own, then maybe Benedict and Keira might help you a bit."
  
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
        x.innerHTML="Unearth the final destination where they disaccorded.  (Still can't crack the cipher, then your last hope might be Alan Turing)"
  
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
        