

var name_tache = {
    Marche : "Marche",
    Footing : "Footing",
    Cource : "Cource",
    Courire_pour_sa_vie: "Courire pour sa vie",
    Cueillir_des_champignons: "Cueillir des champignons",
    Discuter_au_cafe : "Discuter au cafe" ,
    Draguer : "Draguer" ,
    Forge : "Forge" ,
    Vente : "Vente" ,
    Entrainement : "Entrainement" ,
    Entrainement_avance : "Entrainement avance" ,
    Combat_de_rue : "Combat de rue" ,
    Combat_amicale : "Combat amicale" 
}

var taches = [
    { name : "Marche"                   ,fun : Marche                   , conditions : [{name : "default" , lvl : null}] },
    { name : "Footing"                  ,fun : Footing                  , conditions : [{name : "default" , lvl : null}] },
    { name : "Cource"                   ,fun : Cource                   , conditions : [{name : "default" , lvl : null}] },
    { name : "Courire pour sa vie"      ,fun : Courire_pour_sa_vie      , conditions : [{name : "default" , lvl : null}] },
    { name : "Cueillir des champignons" ,fun : Cueillir_des_champignons , conditions : [{name : "default" , lvl : null}] },
    { name : "Discuter au cafe"         ,fun : Discuter_au_cafe         , conditions : [{name : "default" , lvl : null}] },
    { name : "Draguer"                  ,fun : Draguer                  , conditions : [{name : "default" , lvl : null}] },
    { name : "Forge"                    ,fun : Forge                    , conditions : [{name : "default" , lvl : null}] },
    { name : "Vente"                    ,fun : Vente                    , conditions : [{name : "default" , lvl : null}] },
    { name : "Entrainement"             ,fun : Entrainement             , conditions : [{name : "default" , lvl : null}] },
    { name : "Entrainement avance"      ,fun : Entrainement_avance      , conditions : [{name : "default" , lvl : null}] },
    { name : "Combat de rue"            ,fun : Combat_de_rue            , conditions : [{name : "default" , lvl : null}] },
    { name : "Combat amicale"           ,fun : Combat_amicale           , conditions : [{name : "default" , lvl : null}] }

]



function Marche( name, conditions ) {


    // recupere les index qui correspond 
    var index_to_data = null
    var index_to_taches = null

    for (let i = 0; i < GameData.usingtache.length; i++) {
        if ( GameData.usingtache[i].name == name ) {
            index_to_data = i 
            break
        }
    }

    for (let i = 0; i < taches.length; i++) {
        if ( taches[i].name == name ) {
            index_to_taches = i 
            break
        }
    }
    
    // traitement des condisiont  
    for (let i = 0; i < conditions.length; i++) {
        
        var condition_name =  conditions[i].name 

        if (condition_name == "default") {
            break;
        }
        
    }

    // Recuperation la tache 
    var tache = GameData.taches[GameData.p_tache] ;

    // EXP & energie 
    var Energie_default = 100
    var DeltaEnergi = ( 1 -  ( GameData.Skills[0].Game.Lvl / 1000 + GameData.Skills[0].Loop.Lvl / 100 ) );

    var Use_default_second = 10 
    var DeltaUse =  1 + ( GameData.Skills[6].Game.Lvl / 100 + GameData.Skills[6].Loop.Lvl / 10 ) 
    var Use_Energi = Use_default_second * DeltaUse

    // Exp par tache 
    var Exp_Loop_constitution    = 100
    var Exp_Loop_force           = 0
    var Exp_Loop_defense         = 0
    var Exp_Loop_intelligence    = 0
    var Exp_Loop_agilite         = 0
    var Exp_Loop_charisme        = 0
    var Exp_Loop_volonte         = 0

    var Exp_Game_constitution    = 0
    var Exp_Game_force           = 0
    var Exp_Game_defense         = 0
    var Exp_Game_intelligence    = 0
    var Exp_Game_agilite         = 0
    var Exp_Game_charisme        = 0
    var Exp_Game_volonte         = 0
    
    // definisiont du couts energique 
    tache.progresiont[1] = Energie_default * DeltaEnergi ;

    GameData.Skills[0].Loop.Exp += (Exp_Loop_constitution     * (Use_Energi /(Energie_default * DeltaEnergi))   * DeltaUse  * DeltaFrameRate())
    GameData.Skills[1].Loop.Exp += (Exp_Loop_force            * (Use_Energi /(Energie_default * DeltaEnergi))   * DeltaUse  * DeltaFrameRate())
    GameData.Skills[2].Loop.Exp += (Exp_Loop_defense          * (Use_Energi /(Energie_default * DeltaEnergi))   * DeltaUse  * DeltaFrameRate())
    GameData.Skills[3].Loop.Exp += (Exp_Loop_intelligence     * (Use_Energi /(Energie_default * DeltaEnergi))   * DeltaUse  * DeltaFrameRate())
    GameData.Skills[4].Loop.Exp += (Exp_Loop_agilite          * (Use_Energi /(Energie_default * DeltaEnergi))   * DeltaUse  * DeltaFrameRate())
    GameData.Skills[5].Loop.Exp += (Exp_Loop_charisme         * (Use_Energi /(Energie_default * DeltaEnergi))   * DeltaUse  * DeltaFrameRate())
    GameData.Skills[6].Loop.Exp += (Exp_Loop_volonte          * (Use_Energi /(Energie_default * DeltaEnergi))   * DeltaUse  * DeltaFrameRate())

    GameData.Skills[0].Game.Exp += (Exp_Game_constitution     * (Use_Energi /(Energie_default * DeltaEnergi))   * DeltaUse  * DeltaFrameRate())
    GameData.Skills[1].Game.Exp += (Exp_Game_force            * (Use_Energi /(Energie_default * DeltaEnergi))   * DeltaUse  * DeltaFrameRate())
    GameData.Skills[2].Game.Exp += (Exp_Game_defense          * (Use_Energi /(Energie_default * DeltaEnergi))   * DeltaUse  * DeltaFrameRate())
    GameData.Skills[3].Game.Exp += (Exp_Game_intelligence     * (Use_Energi /(Energie_default * DeltaEnergi))   * DeltaUse  * DeltaFrameRate())
    GameData.Skills[4].Game.Exp += (Exp_Game_agilite          * (Use_Energi /(Energie_default * DeltaEnergi))   * DeltaUse  * DeltaFrameRate())
    GameData.Skills[5].Game.Exp += (Exp_Game_charisme         * (Use_Energi /(Energie_default * DeltaEnergi))   * DeltaUse  * DeltaFrameRate())
    GameData.Skills[6].Game.Exp += (Exp_Game_volonte          * (Use_Energi /(Energie_default * DeltaEnergi))   * DeltaUse  * DeltaFrameRate())

    //
    tache.progresiont[0] += Use_Energi * DeltaFrameRate()
    GameData.Energie -= Use_Energi * DeltaFrameRate()
   
}

function Footing (name, conditions) {

   
}

function Cource(name, conditions) {

}

function Courire_pour_sa_vie(name, conditions) {

}

function Cueillir_des_champignons(name, conditions) {

}

function Discuter_au_cafe (name, conditions) {
   
}

function Draguer(name, conditions) {

} 

function Forge(name, conditions) {

} 

function Vente(name, conditions) {

}

function Entrainement(name, conditions) {
 
} 

function Entrainement_avance(name, conditions) {

} 

function Combat_de_rue(name, conditions) {
 
} 

function Combat_amicale (name, conditions) {

} 


function getFuncName() {
    return getFuncName.caller.name
}