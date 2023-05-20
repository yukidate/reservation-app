import { Component } from '@angular/core';
import {ProductService} from '../shared/product.service';


@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent {
  products: any 

  constructor(private productService: ProductService){}

  ngOnInit(){
    //this.products = this.productService.getProducts()

    const productsObservable = this.productService.getProducts()
    productsObservable.subscribe(
      (data) => {
        console.log('次のデータが出力されました ' + data) 
        this.products = data
      },
      (err) => {console.error('something wrong occurred: ' + err);},
      () => {console.log('完了しました');}
    )
  }
}
