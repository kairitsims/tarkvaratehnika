import {HttpClient, json} from 'aurelia-fetch-client'

//var vastus = {}

export class Home{
    userData = {}
    userList= []

    getUser(x, y){
        console.log(x)
        console.log(y)
        var val;
    
    
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