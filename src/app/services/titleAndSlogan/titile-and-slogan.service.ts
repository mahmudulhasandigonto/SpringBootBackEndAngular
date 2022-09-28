import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleAndSlogan } from 'src/app/Model/TitleAndSlogan';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TitileAndSloganService {
  constructor(private http: HttpClient) { }

  public updateTitleSlogan(id: number, titleslogan: any) {
    return this.http.put(environment.apiUrl + "/updateTitleAndSlogan/" + id, titleslogan, { responseType: "text" as "json" });


  }

  public getTitleAndSlogan(id: any) {
    return this.http.get(environment.apiUrl + "/getTitleAndSlogan/" + id);
  }
}
