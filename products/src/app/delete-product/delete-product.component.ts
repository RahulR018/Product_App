import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  deldatas: ProductModel[];
  array: any[];
  constructor(
    private productlistService: ProductService,
    private router: Router) { }


  ngOnInit(): void {
    this.productlistService.getProducts().subscribe((data) => {
      this.deldatas = JSON.parse(JSON.stringify(data));
    })
  }
  delproduct(id) {
    console.log(id);
    this.productlistService.delProduct(id);
    this.router.navigate(['/'])
    // console.log(document.querySelectorAll('#table tbody tr')[0].closest('tr').cells[0].innerText);
  }
}
