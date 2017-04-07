import {HttpClient, json} from 'aurelia-fetch-client'
import {AureliaCookie} from 'aurelia-cookie'

export class training{
    
    trainingData = {}
    trainingList=[]
    
    
    addTraining(){
        
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/training/add', {
            'method': "POST",
            'body': json({ "username": AureliaCookie.get('username'),
                         "trainingName": this.trainingData.trainingName,
                         "trainingLength": this.trainingData.trainingLength,
                         "trainingComments": this.trainingData.trainingComments})
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis " + data.trainingName);
        });
        //Nii saaks ka lahendada
        //var landingUrl = "http://" + window.location.host + //"#/history";
        //window.location.href = landingUrl
    }
   
}