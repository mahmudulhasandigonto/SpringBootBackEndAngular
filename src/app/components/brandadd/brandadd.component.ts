import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Model/Brand';
import { BrandService } from 'src/app/services/brandservice/brand.service';

@Component({
  selector: 'app-brandadd',
  templateUrl: './brandadd.component.html',
  styleUrls: ['./brandadd.component.css']
})
export class BrandaddComponent implements OnInit {
  message: any;
  brand = new Brand(0, "");
  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
  }

  postBrand() {
    this.brandService.postBrand(this.brand).subscribe((message) => {
      this.message = message;
    })
  }


}
