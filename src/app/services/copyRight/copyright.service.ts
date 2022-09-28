import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CopyRight } from './../../Model/CopyRight';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CopyrightService {

  constructor(private http: HttpClient) { }

  public updateCopyright(id: number, copyright: CopyRight) {
    return this.http.put(environment.apiUrl + "/updateCopyRight/" + id, copyright, { responseType: "text" as "json" });
  }

  public getCopyRight(id: number) {
    return this.http.get(environment.apiUrl + "/getCopyRight/" + id);
  }




}
