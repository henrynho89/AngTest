import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product.module';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products?: Product[];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  onGetAllProducts(){
    this.productService.getAllProducts().subscribe(data=>{
      this.products=data;
    },err=>{
      console.log(err);
    })
  }

}
