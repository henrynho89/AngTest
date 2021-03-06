import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../Model/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  host = environment.host;
  
  constructor(private http: HttpClient) {}

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.host+"/Products");
  }
  getSelectedProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.host+"/Products?selected=true");
  }
  getAvailableProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.host+"/Products?available=true");
  }
}
