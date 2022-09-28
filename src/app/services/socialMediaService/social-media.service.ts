import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SocialMedia } from './../../Model/SocialMedia';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  constructor(private http: HttpClient) { }

  public updateSocialMedia(id: number, socialMedia: SocialMedia) {
    return this.http.put(environment.apiUrl + "/updateSocialMedia/" + id, socialMedia, { responseType: 'text' as 'json' });
  }

  getSocialMedia(id: number) {
    return this.http.get(environment.apiUrl + "/getSocialMedia/" + id);
  }
}
