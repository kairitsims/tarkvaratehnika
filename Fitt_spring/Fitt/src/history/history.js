import {HttpClient, json} from 'aurelia-fetch-client'
import {AureliaCookie} from 'aurelia-cookie'

export class history{
    
    trainingList=[]


    activate(){
        
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/training/' + AureliaCookie.get('username'))
            .then(response => response.json())
            .then(trainings => this.trainingList = trainings);

    }
   
}