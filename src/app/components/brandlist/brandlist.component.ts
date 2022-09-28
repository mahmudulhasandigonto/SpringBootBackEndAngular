import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Brand } from 'src/app/Model/Brand';
import { BrandService } from 'src/app/services/brandservice/brand.service';

@Component({
  selector: 'app-brandlist',
  templateUrl: './brandlist.component.html',
  styleUrls: ['./brandlist.component.css']
})
export class BrandlistComponent implements OnInit {
  willShowBrandList: boolean = true;
  brandList: any;
  message: any;
  forUpdateBrand: any;

  constructor(@Inject(DOCUMENT) private document: Document, private brandService: BrandService) { }

  ngOnInit(): void {
    this.brandService.getBrand().subscribe(brand => {
      this.brandList = brand;
    })
  }

  getInfo(id: any) {
    this.brandService.findBrandById(id).subscribe(data => {
      this.forUpdateBrand = data;
      console.log(data);

    })
    this.willShowBrandList = false;
  }

  deleteBrand(id: any) {
    this.brandService.deleteBrand(id).subscribe(
      (message: any) => {
        this.message = message;
      }
    );

    this.document.location.reload();

  }

  updateBrand(id: any, brand: Brand) {
    this.brandService.updateBrand(id, brand).subscribe((data: any) => {
      this.message = data;
    })
    console.log(brand);

    this.willShowBrandList = true;
    this.document.location.reload();
  }



}
