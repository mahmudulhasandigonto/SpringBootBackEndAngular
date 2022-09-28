import { Slider } from './../../Model/Slider';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { SliderService } from 'src/app/services/sliderService/slider.service';

@Component({
  selector: 'app-slideradd',
  templateUrl: './slideradd.component.html',
  styleUrls: ['./slideradd.component.css']
})
export class SlideraddComponent implements OnInit {
  message: any;
  slider = new Slider(0, "", "");

  constructor(@Inject(DOCUMENT) private document: Document, private sliderService: SliderService) { }

  ngOnInit(): void {
  }


  postSlider() {
    this.sliderService.postSlider(this.slider).subscribe(data => {
      this.message = data;
    })
    console.log(this.slider);

  }



}
