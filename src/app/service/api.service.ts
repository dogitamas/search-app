
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Api version number can be changed here
  protected apiVersion = 'v2';

  constructor(private http: HttpClient) { }

  getProducts() {
    let url = 'http://localhost:3000/api/' + this.apiVersion + '/search?query=Black';
    return this.http.get(url);
  }

  getProductsByKeyword(keyword: string){
    let url = 'http://localhost:3000/api/' + this.apiVersion + '/search?query=' + keyword;
    return this.http.get(url);
  }
}
