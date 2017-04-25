import {HttpClient, json} from 'aurelia-fetch-client'
import {AureliaCookie} from 'aurelia-cookie'

export class legs{
    
    
    millisToMinutesAndSeconds(millis){
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    
    addTraining(){
        let newTime = new Date();
        let newTime2 = newTime.getTime();
        var time2 = AureliaCookie.get('time');
        let time1 = newTime2 - time2
        var finaltime = this.millisToMinutesAndSeconds(time1) + " minutit";
        console.log(finaltime)
        
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/training/add', {
            'method': "POST",
            'body': json({ "username": AureliaCookie.get('username'),
                         "trainingName": "Jalalihaste treening",
                         "trainingComments": this.trainingData.trainingComments,
                         "trainingLength": finaltime,
                         "date": (new Date()).toString().replace(/\S+\s(\S+)\s(\d+)\s(\d+)\s.*/,'$2-$1-$3')})
        })
            .then(response => response.json())
            .then(data => {
                console.log("Töötab");
        });
        document.getElementById("form").reset();
    }
    
    exerciseList= []
    
    activate(){
        
        var aeg = new Date();
        var aeg2 = aeg.getTime();
        AureliaCookie.set('time', aeg2, {
            expiry: 1, // Expiry in hours, -1 for never expires or minimum 1 for one hour, 2 for two hours and so
            path: '', // Specify cookie path
            domain: '', // Domain restricted cookie
            secure: false // Either true or false
        });
        
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/exercise/legs')
            .then(response => response.json())
            .then(exercises => this.exerciseList = exercises);
    }  
}