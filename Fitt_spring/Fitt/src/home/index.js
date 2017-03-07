import {HttpClient, json} from 'aurelia-fetch-client'

//var vastus = {}

export class Home{
    userData = {}
    userList= []
    
    
    activate(){
        
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/users')
            .then(response => response.json())
            .then(users => this.userList = users);
        
    
    }

    getUser(x, y){
        console.log(x)
        console.log(y)
        var val;
        //this.vastus = null;
    
    
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/users/'+ x)
            .then(response => response.json())
            .then(data => {
                //console.log(JSON.stringify(data.password) === '"'+y+'"');
                if(JSON.stringify(data.password) === '"'+y+'"'){
                    console.log("Korras")
                    var landingUrl = "http://" + window.location.host + "#/main";
                    window.location.href = landingUrl
                }else{
                    console.log("Vale password")
                    alert("Vale salasõna! Proovige uuesti")
                }
            })
            
        }   //see tahastab konsooli true või false, works
        
        
        
            //.then(data => this.vastus = JSON.stringify(data.password))
            //.if(this.vastus == y){
            //    console.log("ghjkl")
            //}else{
            //    console.log("aaa")
            //});
        
            //.then(data => {
                //this.vastus = data;
            //});
        //console.log(JSON.stringify(this.vastus));
        

    askUser(x, y){
        console.log(x)
        console.log(y)
        
        if (this.getUser(x, y) === true){
            console.log("abc")
        }else{
            console.log("xxx")
        }
    }


}