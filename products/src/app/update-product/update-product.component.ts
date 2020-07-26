import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from '../product-list/product.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id = '';
  newProduct = {}
  array = [];
  productData: ProductModel[];
  prdata = new ProductModel(null, null, null, null, null, null, null, null);
  constructor(private productlist: ProductService) { }

  ngOnInit(): void {
    this.productlist.getProducts().subscribe((data) => {
      this.productData = JSON.parse(JSON.stringify(data))
    })
  }

  edit(p) {
    document.getElementById('button').removeAttribute('disabled');
    this.array = Array.from(document.querySelectorAll('input'));
    this.array[0].value = p.productName;
    this.array[1].value = p.productCode;
    this.array[2].value = p.releaseDate;
    this.array[3].value = p.price;
    this.array[4].value = p.starRating;
    this.array[5].value = p.imageUrl;
    this.id=p._id
  };

  up(id) {
    for(let p in this.prdata){
      if(this.prdata[p]!=null){
        this.newProduct[p] = this.prdata[p];
      }
    }
    this.productlist.updateProduct(id, this.newProduct)
  }

}
