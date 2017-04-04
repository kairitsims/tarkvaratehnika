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
        let aeg = new Date()
        let aeg2 = aeg.getTime();
        console.log(aeg2)
        console.log(AureliaCookie.get('username'));
    }
}