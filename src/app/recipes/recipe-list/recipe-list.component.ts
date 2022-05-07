import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'A Demo',
      'https://images.indianexpress.com/2018/12/Baked-Chicken-Caprese-Farfelle_759.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
