
var uploadData ;

function onChange(event) {
    console.log(data)
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
    
}

function onReaderLoad(event){
    uploadData = JSON.parse(event.target.result);
    document.getElementById('uploadJSON').value = "";
    // console.log(uploadData);
}

// Dans window.onload pour definire l'événement de chargement du fichie JSON
document.getElementById('uploadJSON').addEventListener('change', onChange);


// Dans le HTML 
// au moment ou on click sur les label, il demande la l'utilisateur un fichie JSON 
// puis il est recuperer dans la variable Data
// il y a besion d'un seul input pour tou 
//
// <input type="file" id="uploadJSON" accept=".json" style="display : none;"></input>
// <label for="uploadJSON" >uploadJSON</label>
//


// ce programme peut être utilisé si les modifier.
