import {HttpClient, json} from 'aurelia-fetch-client'
export class Home{
    
    userData = {}
    logiSisse(){
        
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/users', {
            'method': "GET",
            'body': json(this.userData)
        })
            .then(response => response.json());
        console.log("tere")
    }


}