import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Slider } from 'src/app/Model/Slider';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SliderService {


  constructor(private http: HttpClient) { }

  public postSlider(slider: Slider) {
    console.log(slider);

    return this.http.post("http://localhost:8080/postSlider", slider, { responseType: 'text' as 'json' });
  }

  public getSlider() {
    return this.http.get(environment.apiUrl + "/getSlider");
  }

  public deleteSlider(id: number) {
    return this.http.delete(environment.apiUrl + "/deleteSlider/" + id, { responseType: "text" as "json" });
  }

  public updateSlider(id: number, slider: Slider) {
    return this.http.put(environment.apiUrl + "/updateSlider/" + id, slider);
  }

  public findSliderById(id: number) {
    return this.http.get(environment.apiUrl + "/getSlider/" + id);
  }

}
