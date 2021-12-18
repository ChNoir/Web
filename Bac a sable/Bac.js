// Pour A2SNIR par FD //
// Le 20-08-2017  //
// Bac à Sable Html Simple //

var html,output,css,js;

function addJS() {
	if (output.contentDocument.body.getElementsByTagName("script").length <= 0) {
		var tamp = output.contentDocument.createElement("script")
		output.contentDocument.body.appendChild(tamp)
	}	
	output.contentDocument.getElementsByTagName("script")[0].innerHTML = js.textContent;
}

window.onload=function(){
	html	= document.getElementById("html");
	output	= document.getElementById("output");
	css		= document.getElementById("css");
	js 		= document.getElementById("js")

	html.onkeyup= () =>{ 
		output.contentDocument.body.innerHTML = html.textContent
		addJS();
	}
	css.onkeyup= () => { 
		if (output.contentDocument.head.getElementsByTagName("style").length <= 0) {
			var tamp = output.contentDocument.createElement("style")
			output.contentDocument.head.appendChild(tamp)
		}	
		output.contentDocument.getElementsByTagName("style")[0].innerHTML = css.textContent.replace(/\s/g," ") ;
	};
	js.onkeyup = addJS();

}


function deletes_html () {
	document.getElementById("html").textContent = "" ;
	output.contentDocument.body.innerHTML ="";
	addJS();
}

function deletes_css() {
	document.getElementById("css").textContent = "" ;
	output.contentDocument.head.innerHTML ="";
}

function deletes_js() {
	document.getElementById("js").textContent = "" ;
	output.contentDocument.body.innerHTML = html.textContent
}

function bac_color() {

	document.getElementById("get-text").innerHTML = "";
	document.getElementById("get-text").innerHTML = `background-color: ${document.getElementById("color").value} ;`;
	
}