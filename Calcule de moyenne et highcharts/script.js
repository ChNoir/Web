var math, francais , anglai , E4 ,E5, E6_1, E6_2 ;
var vide

var couleur =  "#353535";
var border_Color = "#FFFFFF";
var couleur_data = ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce','#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a']

var ID = [ "Mathematiques" , "Francais", "Anglais", "E4", "E5", "E6_1" ,"E6_2"];
var ID_coeff = [ "Mathematiques-coeff" , "Francais-coeff", "Anglais-coeff", "E4-coeff", "E5-coeff", "E6_1-coeff" ,"E6_2-coeff"];
var Value = [];
var Coeff = [];
var Note = [];

var chartBench ;

window.onload = function () {
   
    Value = [];
    Coeff = [];
    Note = [];

    for (var element of ID) {

        let temp = parseInt( document.getElementById(element).value );

        if (temp > 20 ) {
            document.getElementById(element).value = 20 ;
            Value.push(20);
        }
        else if (temp < 0) {
            document.getElementById(element).value = 0 ;
            Value.push(0);
        }
        else {

            Value.push(temp)
        }      
    }

    for (var element of ID_coeff) {

        let temp = parseInt( document.getElementById(element).value );

        if (temp < 0) {
            document.getElementById(element).value = 1;
            Coeff.push(1);
        }
        else {
            Coeff.push(temp)
        }      
    }

    var totoCoeff = 0 ;
    var vide = 20 ;

    for (let i of Coeff) {
        totoCoeff += i  ;
    }
    
    for (let i = 0; i < Value.length; i++) {
        
        Note[i] = Math.round(((Value[i]*Coeff[i])/totoCoeff) * 100) / 100 ;
    }

    for (let i of Note ) {
        vide -= i ;
    }


   
    var data = {
        chart: {
            
            plotBackgroundColor: couleur ,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor: couleur,
            borderColor:border_Color,
            borderWidth: 2,
           
            height: 300
        },
        colors: couleur_data,
        title: {
            text: ''
        },
        tooltip: {
            formatter: function() {
                if (this.key == "vide") {
                    return `La moyenne est de ${Math.round((20 - this.y) *100)/100 } /20`;
                }
                else {
                    return `Poid de la note sur la moyenne : ${this.y} /20`
                };
            },
            hideDelay: 100
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: { 
                states:{
                    hover:{enabled:false},
                    inactive: {
                        opacity: 1
                    }
                },
               
                allowPointSelect: false,
                cursor: 'pointer',
               
                dataLabels: {
                    style: {
                        fontFamily: "Lucida Sans",
                        fontSize: '1.2em',
                        textOutline : 'none'
                       
                    },
                    color: border_Color ,
                    enabled: true,
                    format: '<b>{point.name}</b>'
                }
            }
        },
        series: [
            { 
            name: 'Note',
            colorByPoint: true,
            data: [{
                name: 'Mathematiques',
                y: Note[0]
            }, {
                name: 'Francais',
                y: Note[1]
            }, {
                name: 'Anglais',
                y: Note[2] 
            }, {
                name: 'Info',
                y: Note[3]
            }, {
                name: 'Instal Maintenance',
                y: Note[4]
            }, {
                name: 'Stage',
                y: Note[5]
            }, {
                name: 'Projet',
                y: Note[6]
            },{
                name : "vide",
                dataLabels: {
                    enabled: false
                },
                color: '#353535',
                y: vide
            }]
        }]
    }

    // 

    



    // auto-updata

    chartBench = new Highcharts.chart("contenere-camenber",data) ;

    var input = document.getElementsByClassName("imput-matier")
    var coeff = document.getElementsByClassName("imput-coeff")

    for (let index of input) {

        index.oninput = () => { 
            update() 
        }
        
    }
    for (let index of coeff) {

        index.oninput = () => { 
            update() 
        }
        
    }
    
}

function update() {

    Value = [];
    Coeff = [];
    Note = [];

    for (var element of ID) {

        let temp = parseInt( document.getElementById(element).value );

        if (temp > 20 ) {
            document.getElementById(element).value = 20 ;
            Value.push(20);
        }
        else if (temp < 0) {
            document.getElementById(element).value = 0 ;
            Value.push(0);
        }
        else {

            Value.push(temp);
        }      
    }

    for (var element of ID_coeff) {

        let temp = parseInt( document.getElementById(element).value );

        if (temp < 0) {
            document.getElementById(element).value = 1;
            Coeff.push(1);
        }
        else {
            Coeff.push(temp)
        }      
    }

    var totoCoeff = 0 ;
    vide = 20 ;

    for (let i of Coeff) {
        totoCoeff += i  ;
    }
    
    for (let i = 0; i < Value.length; i++) {
        
        Note[i] = Math.round(((Value[i]*Coeff[i])/totoCoeff) * 100) / 100 ;
    }

    for (let i of Note ) {
        vide -= i ;
    }

    chartBench.series[0].update({
        data: [{
            name: 'Mathematiques',
            y: Note[0]
        }, {
            name: 'Francais',
            y: Note[1]
        }, {
            name: 'Anglais',
            y: Note[2] 
        }, {
            name: 'Info',
            y: Note[3]
        }, {
            name: 'Instal Maintenance',
            y: Note[4]
        }, {
            name: 'Stage',
            y: Note[5]
        }, {
            name: 'Projet',
            y: Note[6]
        },{
            dataLabels: {
                enabled: false
            },
            color: '#353535',
            allowPointSelect: false,
            cursor: 'pointer',
            y: vide
        }]
    });



   

}

function resultat() {

    update() ;
    if ((20 - vide) < 9.80) {

        document.getElementsByClassName("test-1")[0].innerHTML = "Recaler"

    }else if ( (20 - vide) > 10 ) {
        document.getElementsByClassName("test-1")[0].innerHTML = "Admis"
    }else {
        document.getElementsByClassName("test-1")[0].innerHTML = "Admis limite"
    }

    document.getElementsByClassName("display-resultat")[0].setAttribute("style","display : block ;");


    var conterner_list_matiere = document.getElementById("conterner-list-matiere");

  
       
    let element = document.createElement("div")
    let childElement = document.createElement("div")
    childElement.setAttribute("class","cercle")

    element.setAttribute("class","dispaly-inline-block")
    element.appendChild(childElement)
    childElement = document.createElement("p")
    element.appendChild(childElement)
    console.log(element)
}





