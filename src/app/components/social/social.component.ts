import { SocialMediaService } from './../../services/socialMediaService/social-media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  forUpdateSocialMedia: any;
  message: any;
  constructor(private socialMediaService: SocialMediaService) { }

  ngOnInit(): void {
    this.socialMediaService.getSocialMedia(102).subscribe((data) => {
      this.forUpdateSocialMedia = data;
    })
  }

  updateSocialMedia(id: number, data: any) {
    this.socialMediaService.updateSocialMedia(id, data).subscribe((message) => {
      this.message = message;
    })
  }

}
