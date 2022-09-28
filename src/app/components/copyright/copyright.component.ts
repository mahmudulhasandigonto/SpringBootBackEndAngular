import { CopyrightService } from './../../services/copyRight/copyright.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {
  message: any;
  forUpdateCopyRight: any;
  constructor(private copyrightService: CopyrightService) { }

  ngOnInit(): void {
    this.forUpdateCopyRight = this.copyrightService.getCopyRight(93).subscribe((data: any) => {
      this.forUpdateCopyRight = data;
    }
    )
  }

  updatecopyright(id: any, dataforUpdate: any) {
    this.copyrightService.updateCopyright(id, dataforUpdate).subscribe(data => {
      this.message = data;
    })
  }

}
