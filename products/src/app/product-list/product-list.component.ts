import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title: String = "Product List";
  //product is the model class for a product item.
  products: ProductModel[];
  //Image properties
  imageWidth: number = 50;
  imageMargin: number = 2;

  showImage:boolean= false;
  // creating service object for calling the function getProducts()
  constructor(private productlistService: ProductService) { }

  toggleImage():void{
    this.showImage= !this.showImage;
  }

  ngOnInit(): void {
    //calling getproducts() and then storing the data in products array.
    this.productlistService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
  }

}
