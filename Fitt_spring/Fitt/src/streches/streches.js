import {HttpClient, json} from 'aurelia-fetch-client'

export class soojendus{
    
    exerciseList= []
    
    activate(){
        
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/exercise/streches')
            .then(response => response.json())
            .then(exercises => this.exerciseList = exercises);

        
    }

    
}
