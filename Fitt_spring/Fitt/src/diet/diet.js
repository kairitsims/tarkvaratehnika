import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework'

import {index} from './home/index';

@inject(index)
export class diet{
    
    constructor(username){
        this.
    }
    
    userData = {}
    dietList=[]
    
    addDiet(){
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/diet/add', {
            'method': "POST",
            'body': json(this.userData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis " + data.foodName);
        });
        document.getElementById("form").reset();
    }

    activate(){
        
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/diet')
            .then(response => response.json())
            .then(diets => this.dietList = diets);

    }
   
}