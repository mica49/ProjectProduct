import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/serv/product-service.service';
import { IProduct } from 'src/app/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle:string = 'Product List'
  showImage:boolean = false
  SearchFilter:string = ''
  //listeFilter:string = ''
  filteredProducts: IProduct[]
  private _listeFilter:string
  exemple:string = "product,price..."
  subm:boolean = true

  constructor(public prodServ:ProductServiceService) {
    console.log(prodServ.products)
    this.filteredProducts = prodServ.products
   }

  ngOnInit() {
  }

  toogleImage(){
    this.showImage = !this.showImage
  }

  placeholderChange(){
    if(!this.exemple)
    this.exemple = 'product,price...'
    else{this.exemple = ''}
  }

  submit(){
    this.subm = !this.subm
  }



  get listeFilter():string{
    return this._listeFilter;
  }

  set listeFilter(value:string){
    this._listeFilter = value;
    this.filteredProducts = this.listeFilter ? this.performFilter(this.listeFilter) : this.prodServ.products
  }

  performFilter(filterBy:string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.prodServ.products.filter((product:IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) === 0)
  }

}
