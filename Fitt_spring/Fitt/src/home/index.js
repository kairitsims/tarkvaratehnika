import {HttpClient, json} from 'aurelia-fetch-client'

export class Home{
    userData = {}
    userList= []
    vastus = []
    
    activate(){
        
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/users')
            .then(response => response.json())
            .then(users => this.userList = users);
        
    
    }
    

    getUser(x, y){
        console.log(x)
        console.log(y)
        
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/users/'+ x)
            .then(response => response.json())
            .then(data => this.vastus = data.password);
        
        
    }
}