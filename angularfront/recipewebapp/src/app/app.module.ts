import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { StartcomponentsComponent } from './startcomponents/startcomponents.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    GalleryComponent,
    ContactComponent,
    StartcomponentsComponent,
     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        //intro page links
        {path : '', component : StartcomponentsComponent },
        //recipe page
        {path : 'recipe', component :RecipeComponent},
        //gallery page
        {path : 'gallery', component : GalleryComponent},
        //contact page
        {path : 'contact', component : ContactComponent}
        
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
