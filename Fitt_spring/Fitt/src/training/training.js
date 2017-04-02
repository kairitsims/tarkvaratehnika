import {HttpClient, json} from 'aurelia-fetch-client'

export class training{
    
    trainingData = {}
    trainingList=[]
    
    
    addTraining(){
        
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/training/add', {
            'method': "POST",
            'body': json(this.trainingData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis " + data.trainingName);
        });
        document.getElementById("form").reset();
    }
   
}