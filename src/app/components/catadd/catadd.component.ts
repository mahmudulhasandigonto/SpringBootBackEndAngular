import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { Category } from './../../Model/Category';

@Component({
  selector: 'app-catadd',
  templateUrl: './catadd.component.html',
  styleUrls: ['./catadd.component.css']
})
export class CataddComponent implements OnInit {
  category = new Category(0, "");
  message: any;

  constructor(private categoryService: CategoryServiceService) {

  }


  ngOnInit(): void {
    // this.categoryService.getCategory();
  }

  postCategory() {
    this.categoryService.postCategory(this.category).subscribe((data) => {
      this.message = data;
    })
    console.log("You have clicked on the category");

  }

}
