import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from '../product-list/product.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  title: String = 'Add Product'
  constructor(
    private productlistService: ProductService,
    private router: Router) { }
  productItem = new ProductModel(null, null, null, null, null, null, null, null);
  ngOnInit(): void {
  }
  AddProduct() {
    this.productlistService.newProduct(this.productItem);
    console.log(this.productItem);
    alert('success');
    this.router.navigate(['/']);
  };
}
