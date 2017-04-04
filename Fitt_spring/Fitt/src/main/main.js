import {HttpClient, json} from 'aurelia-fetch-client'
import {AureliaCookie} from 'aurelia-cookie'

export class main{

    userData = {}

    goToPage(pageName){
        console.log("Server saatis" + pageName);
        var landingUrl = "http://" + window.location.host + "#/" + pageName;
        window.location.href = landingUrl;
    }

    activate(){
        console.log(AureliaCookie.get('username'));
    }
}