import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient, private router: Router) { }
  getProducts() {
    return this.http.get('http://localhost:3000/products');
  };
  newProduct(item) {
    return this.http.post('http://localhost:3000/insert', { 'product': item })
      .subscribe(data => { console.log(data) });
  };
  delProduct(item) {
    return this.http.delete('http://localhost:3000/remove/' + item).subscribe((data) => { console.log(data) })
  }
  updateProduct(id,item) {
    this.http.put('http://localhost:3000/update', { 'id': id,'product': item }).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/'])
    })
  }
};