var downloadData = {} ;

function downloadFileJSON( Data = { test: "ok" } , namefile = "test" ) {

    //
    // il faut rajoute <a id = "downloadAnchorElem" style = "display : none;"></a> 
    // pour que la Function marche !!! 1 sufit pour tout 
    // on peux utilise un label pour apple la function
    // <label onclick="downloadFileJSON(downloadData,'test')">downloadFileJSON</la
    //

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(Data));
    var dlAnchorElem = document.getElementById("downloadAnchorElem");
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", ( namefile + ".json"));
    // simule un click sur l'element pour lanche le telecharge a chaque fois qua la fuction est apple !!!
    dlAnchorElem.click();
}
