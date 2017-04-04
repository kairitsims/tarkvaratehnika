import {HttpClient, json} from 'aurelia-fetch-client'
import {Cookies} from 'aurelia-plugins-cookies'

export class diet{
    
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
        
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/diet')
            .then(response => response.json())
            .then(diets => this.dietList = diets);
    
            //console.log(Cookies.get(username));
    }
   
}