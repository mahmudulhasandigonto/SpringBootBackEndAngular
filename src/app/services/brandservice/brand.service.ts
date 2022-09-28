import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from 'src/app/Model/Brand';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }

  public postBrand(brand: Brand) {
    console.log(brand);

    return this.http.post("http://localhost:8080/postBrand", brand, { responseType: 'text' as 'json' });
  }

  public getBrand() {
    return this.http.get(environment.apiUrl + "/getBrand");
  }

  public deleteBrand(id: number) {
    return this.http.delete(environment.apiUrl + "/deleteBrand/" + id, { responseType: "text" as "json" });
  }

  public updateBrand(id: number, brand: Brand) {
    return this.http.put(environment.apiUrl + "/updateBrand/" + id, brand);
  }

  public findBrandById(id: number) {
    return this.http.get(environment.apiUrl + "/getBrandById/" + id);
  }

}
