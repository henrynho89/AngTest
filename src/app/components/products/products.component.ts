import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Model/product.module';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> | null=null;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  onGetAllProducts(){
    this.products$ = this.productService.getAllProducts();
  }

}
