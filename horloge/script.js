window.onload = function() {
  
    
    var degre = 4*30 ;

    for (let element of document.getElementsByClassName("number") ) {
        
        element.setAttribute("style",`transform: rotate(${degre}deg); transform-origin: ;`);
        element.getElementsByTagName("span").item(0).setAttribute("style",`transform: rotate(-${degre}deg)`);
        degre = degre + 30;

    }

    var heurs = setInterval(()=>{

        var date = new Date;

        var segonds = date.getSeconds();
        var minute = date.getMinutes();
        var heurs = date.getHours();


        document.getElementsByClassName("second").item(0).setAttribute("style",`transform: rotate(${(segonds/60) * 360}deg)`);
        document.getElementsByClassName("minute").item(0).setAttribute("style",`transform: rotate(${(minute/60) * 360 + (segonds/60) * 6 }deg)`);
        document.getElementsByClassName("heur").item(0).setAttribute("style",`transform: rotate(${(heurs/12) * 360 + (minute/60) * 30}deg)`);
        

        
        console.log(heurs);

    },500);



   


}