import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http';

import * as jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

// ------ header ------
    //page current location
    nav_links_colouring(){
        document.getElementById('nav_link_intro').style.color = 'black';
        document.getElementById('nav_link_recipe').style.color = 'black';
        document.getElementById('nav_link_gallery').style.color = 'black';
        document.getElementById('nav_link_contact').style.color = 'black';
    }
    set_navi_current_loca(){
        if(window.location.pathname == '/'){
        document.getElementById('navi_intro').style.borderWidth = '1px';
        }

        if(window.location.pathname == '/gallery'){
        document.getElementById('navi_gallery').style.borderWidth = '1px';
        document.getElementById('slider_contents').style.display = 'none';
        document.getElementById('section_triangle').style.display = 'none';
        document.getElementById('main_header_container').style.height = '0vh';
        document.getElementById('main_header_container').style.color = 'black';
        this.nav_links_colouring();
        }
        if(window.location.pathname == '/contact'){
        document.getElementById('navi_contact').style.borderWidth = '1px';
        document.getElementById('slider_contents').style.display = 'none';
        document.getElementById('section_triangle').style.display = 'none';
        document.getElementById('main_header_container').style.height = '0vh';
        document.getElementById('main_header_container').style.color = 'black';
        this.nav_links_colouring();
        
       
        }
 
        
                
        if(window.location.pathname == '/recipe'){
        document.getElementById('navi_recipe').style.borderWidth = '1px';
        document.getElementById('slider_contents').style.display = 'none';
        document.getElementById('section_triangle').style.display = 'none';
        document.getElementById('main_header_container').style.height = '0vh';
        document.getElementById('main_header_container').style.color = 'black';
        this.nav_links_colouring();
        }
    }
    
        // mobile nav menu toggle
        
    toogle_mobile_nav_menu () {

        this.toggler_show();
    }
    
    
    toggler_hide(){//menu hide
           document.getElementById('navi_intro').style.display = 'none';
           document.getElementById('navi_recipe').style.display = 'none';
           document.getElementById('navi_gallery').style.display = 'none';
           document.getElementById('navi_contact').style.display = 'none';
    }    
    
    toggler_show(){//menu show
           document.getElementById('navi_intro').style.display = 'block';
           document.getElementById('navi_recipe').style.display = 'block';
           document.getElementById('navi_gallery').style.display = 'block';
           document.getElementById('navi_contact').style.display = 'block';
    }
    
    //image loader
    image_funct(){
        
        
    //slider image
        //default on start
         this.http.get('http://localhost:3000/api/imagelist')
            .subscribe(function(data){
            let length = Object.keys(data).length;
             
            document.getElementById('main_header_container').style.backgroundPosition = 'center';
            document.getElementById('main_header_container').style.backgroundSize = 'cover';
            document.getElementById('main_header_container').style.backgroundImage = 'url(http://localhost:3000/'+data[0].file.url+')';
            
                // slider
            document.getElementById('slider_heading').innerHTML = data[0].name;
            document.getElementById('slider_text').innerHTML = data[0].descripion;
            document.getElementById('slider_content_button').onclick =function() {// slider button funct
                alert(data[0].descripion);
                            }
            
            //slider changer
            var counter = 1;
            setInterval( function(){
            document.getElementById('main_header_container').style.backgroundPosition = 'center';
            document.getElementById('main_header_container').style.backgroundSize = 'cover';
            document.getElementById('main_header_container').style.backgroundImage = 'url(http://localhost:3000/'+data[counter].file.url+')';
            
                // slider
            document.getElementById('slider_heading').innerHTML = data[counter].name;
            document.getElementById('slider_text').innerHTML = data[counter].descripion;
            document.getElementById('slider_content_button').onclick =function() {// slider button func
                alert(data[counter].descripion);
                            }
            counter = counter + 1;
            if(counter == length){
                counter = 0;
            }
          }, 6000);
        
        }); 
        
    }
    
    
  


    
    
    constructor(private http :HttpClient){ }
    
    
    ngOnInit(){
        // current page
        this.set_navi_current_loca();
        
        //call image api
        jQuery(document).ready(this.image_funct());
       /*--------------------------- 
    
       
       -----------------------------*/
        
    }
}
