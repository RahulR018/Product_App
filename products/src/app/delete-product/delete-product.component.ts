import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  title: string = "Action";
  deldatas: ProductModel[];
  array: any[]
  constructor(
    private productlistService: ProductService) { }

  ngOnInit(): void {
    this.productlistService.getProducts().subscribe((data) => {
      this.deldatas = JSON.parse(JSON.stringify(data));
    })
  }
  listen(){
    document.querySelectorAll('#table tbody tr').forEach(e=>{
      
    })
  }
  delproduct() {
  }
}
