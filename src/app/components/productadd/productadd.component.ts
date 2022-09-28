import { BrandService } from './../../services/brandservice/brand.service';
import { ProductService } from './../../services/productService/product.service';
import { Product } from './../../Model/Product';
import { Component, Inject, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {
  message: any;
  product = new Product(0, "", 0, "", "", 0, 0, 0);
  categorys: any;
  brands: any;

  constructor(private productService: ProductService, private categoryService: CategoryServiceService, private brandService: BrandService) { }

  ngOnInit(): void {


    this.brandService.getBrand().subscribe((data: any) => {
      this.brands = data;
    });

    this.categoryService.getCategory().subscribe((data: any) => {
      this.categorys = data;
    });


  }


  postProduct() {
    this.productService.postSlider(this.product).subscribe(data => {
      this.message = data;
    })

    console.log(this.product);

  }


}
