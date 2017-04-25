import {HttpClient, json} from 'aurelia-fetch-client'
import {AureliaCookie} from 'aurelia-cookie'

export class weight{
    
    weightData = {}
    weightList=[]
    
    
    addWeight(){
        
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/weight/add', {
            'method': "POST",
            'body': json({ "username": AureliaCookie.get('username'),
                         "weight": this.weightData.weight,
                         "date": (new Date()).toString().replace(/\S+\s(\S+)\s(\d+)\s(\d+)\s.*/,'$2-$1-$3')})
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis " + data.weight);
        });
        document.getElementById("form").reset();
    }

    activate(){
        
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/weight/' + AureliaCookie.get('username'))
            .then(response => response.json())
            .then(weights => this.weightList = weights);

    }
   
}