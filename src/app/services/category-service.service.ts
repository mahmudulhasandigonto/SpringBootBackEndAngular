import { Category } from './../Model/Category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(public http: HttpClient) { }

  public postCategory(category: Category) {
    console.log("category service: " + category.categoryName);

    return this.http.post("http://localhost:8080/postCategory", category, { responseType: 'text' as 'json' });
  }

  public getCategory() {
    return this.http.get(environment.apiUrl + "/getCategory");
  }

  public deleteCategory(id: number) {
    return this.http.delete(environment.apiUrl + "/deleteCategory/" + id, { responseType: "text" as "json" });
  }

  public updateCategory(id: number, category: Category) {
    return this.http.put(environment.apiUrl + "/updateCategory/" + id, category);
  }

  public findCategoryById(id: number) {
    return this.http.get(environment.apiUrl + "/getCategoryById/" + id);
  }


}
