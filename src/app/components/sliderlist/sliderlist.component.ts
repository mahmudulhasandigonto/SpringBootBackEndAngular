import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Slider } from 'src/app/Model/Slider';
import { SliderService } from 'src/app/services/sliderService/slider.service';

@Component({
  selector: 'app-sliderlist',
  templateUrl: './sliderlist.component.html',
  styleUrls: ['./sliderlist.component.css']
})
export class SliderlistComponent implements OnInit {
  willShowSliderList: boolean = true;
  sliderList: any;
  message: any;
  forUpdateSlider: any;

  constructor(@Inject(DOCUMENT) private document: Document, private sliderService: SliderService) { }

  ngOnInit(): void {
    this.sliderService.getSlider().subscribe(brand => {
      this.sliderList = brand;
    })
  }



  getInfo(id: any) {
    this.sliderService.findSliderById(id).subscribe(data => {
      this.forUpdateSlider = data;
      console.log(data);

    })
    this.willShowSliderList = false;
  }

  deleteSlider(id: any) {
    this.sliderService.deleteSlider(id).subscribe(
      (message: any) => {
        this.message = message;
      }
    );

    this.document.location.reload();

  }

  updateSlider(id: any, slider: Slider) {
    this.sliderService.updateSlider(id, slider).subscribe((data: any) => {
      this.message = data;
    })

    this.document.location.reload();
    this.willShowSliderList = true;
  }

}
