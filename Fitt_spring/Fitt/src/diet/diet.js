import {HttpClient, json} from 'aurelia-fetch-client'
import {AureliaCookie} from 'aurelia-cookie'

export class diet{
    
    dietData = {}
    dietList=[]
    
    
    addDiet(){
        
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/diet/add', {
            'method': "POST",
            'body': json({ "username": AureliaCookie.get('username'),
                         "foodName": this.dietData.foodName,
                         "foodAmount": this.dietData.foodAmount,
                         "date": (new Date()).toString().replace(/\S+\s(\S+)\s(\d+)\s(\d+)\s.*/,'$2-$1-$3')})
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis " + data.foodName);
        });
        document.getElementById("form").reset();
    }

    activate(){
        
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/diet/' + AureliaCookie.get('username'))
            .then(response => response.json())
            .then(diets => this.dietList = diets);

    }
   
}