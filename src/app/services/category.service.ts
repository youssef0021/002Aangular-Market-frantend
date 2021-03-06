import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${environment.apiUrl}/categories`); // return this.http.get("http://localhost:8080/categories");
  }

  Save(data: Category) {
    return this.http.post(`${environment.apiUrl}/categories`, data);
  }
}
