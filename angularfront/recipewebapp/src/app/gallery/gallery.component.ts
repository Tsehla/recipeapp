import { Component, OnInit } from '@angular/core';

import { HttpClient} from '@angular/common/http';

import * as jQuery from 'jquery';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
    
  

  constructor(private http : HttpClient) {
  
  
        this.http.get('http://127.0.0.1:3000/api/imagelist').subscribe(function(data){
            
           
          
          let data_array_length = Object.keys(data).length;
          let controlled_array_length = data_array_length;
          let item_counter = 0;
          let image_height = 50;
          let image_width = 40;
          //let image_name = data[item_counter].name;
            
        if(window.location.pathname == '/'){
              if(data_array_length > 3){
                    controlled_array_length = 4;//show only four images at home page
              }
          }
             var image_container_div_size = 90;//set image div height
          
          while(item_counter < controlled_array_length ){
              
      
        // implement float left; heigh small; float right; height big//float left height big; float right; height small
                
            let left_image_height;
            let right_image_height; 
            if(item_counter % 2 == 0){
                left_image_height = 60;
                right_image_height = 30;
                console.log("fisrt left "+left_image_height);
                console.log("first right "+right_image_height);
            }
            else if(item_counter % 2 == 1){
                left_image_height = 30;
                right_image_height = 60;
                console.log("second left "+left_image_height);
                console.log("second right "+right_image_height);
            }
 
          jQuery('#gallery_content').append(`<div id ='gallery_image_`+item_counter+`' style = "display : inline-block; float : left; margin : 1%; box-shadow : 3px 3px 6px black;"></div>`);
          document.getElementById(`gallery_image_`+item_counter).style.backgroundImage = 'url(http://localhost:3000/'+data[item_counter].file.url+')'; 
          document.getElementById(`gallery_image_`+item_counter).style.backgroundSize = 'cover';
          document.getElementById(`gallery_image_`+item_counter).style.backgroundPosition = 'middle';
          document.getElementById(`gallery_image_`+item_counter).style.backgroundRepeat = 'no-repeat';
          jQuery('#gallery_image_'+item_counter).append(`<p style = 'color : white; position : relative; text-shadow : 2px 2px 5px red' >`+(function(){
            if(window.location.pathname == '/'){
                document.getElementById('gallery_image_'+item_counter).onclick =function(){ window.open('gallery?id=gallery_image_'+item_counter, '_self')};//add link to homepage images//scroll to image clicked
                
                document.getElementById('gallery_image_'+item_counter).style.cursor = 'pointer';
                return '';
                }
              return data[item_counter].name;//add image name to gallery page images
          
          })()+`</p>`);
              
              
 
              
            if(item_counter == 1){
                document.getElementById(`gallery_image_`+item_counter).style.marginTop = '10%';//add spacer on the second image to be shown
            }
            

              //-------------------------------------------   
              
              
             //---------------------------------------------------- 
              
           if(item_counter % 2 == 0){//to the left
              
               
              document.getElementById("gallery_content").style.height = image_container_div_size + 'vh';
               
               document.getElementById(`gallery_image_`+item_counter).style.width = image_width + '%';
              document.getElementById(`gallery_image_`+item_counter).style.height = left_image_height + 'vh';
               document.getElementById(`gallery_image_`+item_counter).style.position = 'relative';
               document.getElementById(`gallery_image_`+item_counter).style.cssFloat = 'left';
               document.getElementById(`gallery_image_`+item_counter).style.marginLeft = '9%';
        
               image_container_div_size = image_container_div_size + left_image_height;
           }            
              
            if(item_counter % 2 == 1){ //to the right
            
                document.getElementById(`gallery_image_`+item_counter).style.width = image_width + '%';
                document.getElementById(`gallery_image_`+item_counter).style.height = right_image_height + 'vh';
               document.getElementById(`gallery_image_`+item_counter).style.position = 'relative';
               document.getElementById(`gallery_image_`+item_counter).style.cssFloat = 'right';
               document.getElementById(`gallery_image_`+item_counter).style.marginRight = '9%';
                
                
           }            
               
              
              
           item_counter = item_counter + 1;
            if(window.location.pathname == '/gallery'){
                
                if(item_counter == controlled_array_length - 1){
                    var gallery_image = window.location.search.replace(/%20/g, ' ').split('=');
                    
                    window.scrollTo(0, document.getElementById(gallery_image[1]).offsetTop/2);//devide by to to get approx position
                } 
            }
          }
         // console.log(data);
            //alert('fix footer on this page make it not break');
         
         
          
      }, (error)=>{console.log(error)});
  
  
  
  
  }

  ngOnInit() {
      

      
  }

}
