import { CategoryServiceService } from './../../services/category-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Category } from 'src/app/Model/Category';

@Component({
  selector: 'app-catlist',
  templateUrl: './catlist.component.html',
  styleUrls: ['./catlist.component.css']
})
export class CatlistComponent implements OnInit {
  willShowList: boolean = true;
  forUpdateCategory: any;

  //To share data between components



  categoryList: any;
  message: any;
  category = new Category(0, "");
  constructor(@Inject(DOCUMENT) private document: Document, private categoryServiceService: CategoryServiceService) { }

  ngOnInit(): void {
    this.categoryServiceService.getCategory().subscribe((category) => {
      this.categoryList = category;
    })
  }

  deleteCat(id: number) {
    this.categoryServiceService.deleteCategory(id).subscribe((category) => {
      this.message = category;
      this.document.location.reload();
    })
  }

  getInfo(id: number) {
    this.categoryServiceService.findCategoryById(id).subscribe((category) => {
      this.forUpdateCategory = category;
      this.willShowList = false;
    })
  }

  update(id: number, categoryObj: any) {
    this.categoryServiceService.updateCategory(id, categoryObj).subscribe((message) => { this.message = message; })
    this.willShowList = true;
    this.document.location.reload();
  }



}
