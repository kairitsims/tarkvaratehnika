import {HttpClient, json} from 'aurelia-fetch-client'
import {AureliaCookie} from 'aurelia-cookie'

export class Home{
    userData = {}
    userList= []

    getUser(x, y){
        // Set a cookie
        AureliaCookie.set('username', x, {
            expiry: 1, // Expiry in hours, -1 for never expires or minimum 1 for one hour, 2 for two hours and so
            path: '', // Specify cookie path
            domain: '', // Domain restricted cookie
            secure: false // Either true or false
        });
        console.log(x)
        console.log(y)
    
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/users/'+ x)
            .then(response => response.json())
            .then(data => {
                if(JSON.stringify(data.password) === '"'+y+'"'){
                    console.log("Korras")
                    var landingUrl = "http://" + window.location.host + "#/main";
                    window.location.href = landingUrl
                }else{
                    console.log("Vale password")
                    alert("Vale salasõna! Proovige uuesti")
                }
            })
            
        } 
}