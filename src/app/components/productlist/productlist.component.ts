import { BrandService } from 'src/app/services/brandservice/brand.service';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { ProductService } from './../../services/productService/product.service';
import { DOCUMENT } from '@angular/common';
import { Product } from './../../Model/Product';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  willShowList: boolean = true;
  productList: any;
  message: any;
  forUpdateProduct: any;
  category: any;
  brand: any;

  constructor(@Inject(DOCUMENT) private document: Document, private productService: ProductService, private categoryService: CategoryServiceService, private brandService: BrandService) { }

  ngOnInit(): void {
    this.productService.getSlider().subscribe(brand => {
      this.productList = brand;
    })
  }
  getCategory(id: any) {
    this.categoryService.findCategoryById(id).subscribe((data) => {
      this.category = data;
    });
    // return this.category.categoryName;
  }

  getBrand(id: any) {
    this.brandService.findBrandById(id).subscribe((data) => {
      this.brand = data;
    })
    // return this.brand.brandName;
  }


  getInfo(id: any) {
    this.productService.findSliderById(id).subscribe(data => {
      this.forUpdateProduct = data;
      console.log(data);

    })
    this.willShowList = false;
  }

  deleteProduct(id: any) {
    this.productService.deleteSlider(id).subscribe(
      (message: any) => {
        this.message = message;
      }
    );

    this.document.location.reload();

  }

  updateProduct(id: any, slider: Product) {
    this.productService.updateSlider(id, slider).subscribe((data: any) => {
      this.message = data;
    })

    console.log(slider);

    this.document.location.reload();
    this.willShowList = true;
  }

}
