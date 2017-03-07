import {HttpClient, json} from 'aurelia-fetch-client'

export class signup{
    
    userData = {}
    
    addUser(){
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/users/add', {
            'method': "POST",
            'body': json(this.userData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis " + data.username);
        });
        var landingUrl = "http://" + window.location.host + "";
        window.location.href = landingUrl;
        alert("Kasutajakonto on loodud! Logige sisse");
    }
}