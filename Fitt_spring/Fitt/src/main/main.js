import {HttpClient, json} from 'aurelia-fetch-client'

export class main{

    userData = {}
    
    goToPage(pageName){
        console.log("Server saatis" + pageName);
        var landingUrl = "http://" + window.location.host + "#/" + pageName;
        window.location.href = landingUrl;
        //window.location.href="../exercises/exercises.html" route:"route: signup;";
        
    }
}