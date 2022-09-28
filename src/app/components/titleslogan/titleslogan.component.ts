import { TitileAndSloganService } from './../../services/titleAndSlogan/titile-and-slogan.service';
import { TitleAndSlogan } from './../../Model/TitleAndSlogan';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titleslogan',
  templateUrl: './titleslogan.component.html',
  styleUrls: ['./titleslogan.component.css']
})
export class TitlesloganComponent implements OnInit {
  message: any;
  forUpdateTitleAndSlogan: any;
  constructor(private titleslogan: TitileAndSloganService) { }

  ngOnInit(): void {
    this.titleslogan.getTitleAndSlogan(94).subscribe((data) => {
      this.forUpdateTitleAndSlogan = data;
    })
  }

  updateTitleSlogan(id: any, titlesloganbal: any) {
    this.titleslogan.updateTitleSlogan(id, titlesloganbal).subscribe((data) => {
      this.message = data;

    }
    );


    // this.titleslogan.updateTitleSlogan(id, titlesloganbal).subscribe((data) => {
    //   this.message = data;
    // })
    console.log(this.forUpdateTitleAndSlogan);

  }

}
