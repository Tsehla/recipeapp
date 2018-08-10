import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import * as jQuery from 'jquery';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

    
    
    
  constructor(private http : HttpClient) {
  
  http.get('http://localhost:3000/api/recipes').subscribe((data)=>{
      let data_array_length = Object.keys(data).length;
      
      if(window.location.pathname == '/'){
          if(data_array_length < 6){//set number of recipt to show on home page
          }
          else{
              data_array_length = 4;
          }
      }
      
      //console.log(data);
      let recipe_count =0;
      

      
        while(recipe_count < data_array_length ){//add item per single turn
            

            
            let recipe_content = `<hr>
                            <div id = '`+data[recipe_count].name+`'><!-- used as positioner --></div>
                            <h3 id = 'recipe_`+recipe_count+`' class = 'recipe_heading'>`+
                                        data[recipe_count].name+
                            `</h3>
                            <p class = 'recipe_description'>`+
                                        data[recipe_count].description+
                            `</p>`;
      
            jQuery('#recipe_container').append(recipe_content);
            
            if(window.location.pathname == '/'){
                document.getElementById('recipe_'+recipe_count).style.cursor = 'pointer';
               
                document.getElementById('recipe_'+recipe_count).onclick = function (){
                    
                    window.open('recipe?name='+data[recipe_count].name, '_self');//error issue sending other names than last. method change necessary
                    
                }
                
            }
            
            if(window.location.pathname == '/recipe'){//add ingredients
                var ingredints = Object.keys(data[recipe_count].ingredients).length;
                let ingredients_count = 0;
                
                jQuery('#recipe_container').append(`<ul>`);//ordered list misbehaving
                
                while(ingredients_count < ingredints ){//add ingredients per item turn
                
                 jQuery('#recipe_container').append(`<li>`+data[recipe_count].ingredients[ingredients_count]+`</li>`);
                    ingredients_count = ingredients_count + 1;
                }
                
                jQuery('#recipe_container').append(`</ul>`);
                jQuery('#recipe_container').append(`<p>`+data[recipe_count].method+`</p>`);

            }
            
            
            recipe_count = recipe_count + 1;
            
            if(recipe_count == data_array_length ){//if last recipe loaded
                    jQuery('#recipe_container').append(`<hr>`);  
                if(window.location.pathname == '/recipe'){//from home to recipt page; oage routing to clicked recipe
                    
                    var clicked_recipe = window.location.search.replace(/%20/g, ' ').split('=');
                    
                    if(clicked_recipe[0] == ''){//alert('hei yah');//uisng main navi to get to page
                    }
                    else{//clicked on a recipe from front page
                     
                        window.scrollTo(0, document.getElementById(clicked_recipe[1]).offsetTop);
                       //console.log(document.getElementById(clicked_recipe[1]).offsetTop);
                            
                    
                    }
                }
            }
            
        }
      
  }, (error)=>{console.log(error)});
  
  
  }

  ngOnInit() {
  }

}
