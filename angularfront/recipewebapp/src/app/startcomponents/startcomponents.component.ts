import { Component, OnInit } from '@angular/core';

// consolidate components for start page
import { RecipeComponent } from '../recipe/recipe.component';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-startcomponents',
  templateUrl: './startcomponents.component.html',
  styleUrls: ['./startcomponents.component.scss']

})
export class StartcomponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
