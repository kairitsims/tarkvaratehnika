import {HttpClient, json} from 'aurelia-fetch-client'
import {Cookie} from 'aurelia-cookie'

export class Diet{
    
    dietData = {}
    dietList=[]
    
    
    addDiet(){
        
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/diet/add', {
            'method': "POST",
            'body': json(this.dietData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis " + data.foodName);
        });
        document.getElementById("form").reset();
    }

    activate(){
        var muutuja = Cookie.get(username);
        console.log(muutuja);
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/diet')
            .then(response => response.json())
            .then(diets => this.dietList = diets);
    }
   
}