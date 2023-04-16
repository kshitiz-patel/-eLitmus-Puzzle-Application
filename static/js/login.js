
function f5(){
    var time=new Date();
    var hour=time.getHours();
    var minute=time.getMinutes();
    var second=time.getSeconds();
    document.getElementById("time").value=  `${hour} :${minute}:${second}`

    
    
}