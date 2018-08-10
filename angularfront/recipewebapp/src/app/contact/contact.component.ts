import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    
    input_box(name, email, number){
        if(name == '' || name == ' '){
            document.getElementById('name').style.borderColor = 'red';
            return alert("Please fill name"); }
        if(email.includes('@') == false || email.includes('.') == false){
            document.getElementById('email').style.borderColor = 'red';
            return alert("Incorrect email format")}
        if(number.length < 10 || number.length > 12){
            document.getElementById('number').style.borderColor = 'red';
            return alert("Please check your number")}
        
        //console.log(name, email, number);
        //http://127.0.0.1:3000/api/contact?name=tsehla&contact=0719010014&Email=tsehla2@gmail.com
        let url = 'http://127.0.0.1:3000/api/contact?name='+name+'&contact='+number+'&Email='+email;
        this.http.get(url).subscribe((data)=>{
            console.log(data);
           
               document.getElementById('contact_heading').innerHTML = 'Request Submitted';
        
            
        }, (error)=>{
            document.getElementById('contact_heading').innerHTML = 'Error, please retry';
        });
    }

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

}
