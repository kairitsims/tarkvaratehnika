import {HttpClient, json} from 'aurelia-fetch-client'
import {AureliaCookie} from 'aurelia-cookie'

export class goal{
    
    goalData = {}
    goalList=[]
    
    
    addGoal(){
        
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/goal/add', {
            'method': "POST",
            'body': json({ "username": AureliaCookie.get('username'),
                         "goalName": this.goalData.goalName,
                         "goalDate": this.goalData.goalDate})
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis " + data.goalName);
        });
        document.getElementById("form").reset();
    }

    activate(){
        
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/goal/' + AureliaCookie.get('username'))
            .then(response => response.json())
            .then(goals => this.goalList = goals);

    }
   
}