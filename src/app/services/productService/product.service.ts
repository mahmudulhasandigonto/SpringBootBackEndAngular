import { environment } from './../../../environments/environment';
import { Product } from './../../Model/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  public postSlider(slider: Product) {
    console.log(slider);

    return this.http.post("http://localhost:8080/postProduct", slider, { responseType: 'text' as 'json' });
  }

  public getSlider() {
    return this.http.get(environment.apiUrl + "/getProduct");
  }

  public deleteSlider(id: number) {
    return this.http.delete(environment.apiUrl + "/deleteProduct/" + id, { responseType: "text" as "json" });
  }

  public updateSlider(id: number, slider: Product) {
    return this.http.put(environment.apiUrl + "/updateProduct/" + id, slider);
  }

  public findSliderById(id: number) {
    return this.http.get(environment.apiUrl + "/getProduct/" + id);
  }
}
