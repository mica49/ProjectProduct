import { Injectable } from '@angular/core';
import { IProduct } from '../iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  products = [
    { productID: 1,
      productName : "SSC Tuatara",
      productCode : "GDN-0011",
      releaseDate : "November 10 2019",
      price : 20000000,
      imageUrl : "https://www.challenges.fr/assets/img/2018/08/27/cover-r4x3w1000-5b84072224873-pbc18-conference-09-jpg.jpg",
  },
  {
    productID : 2,
    productName : "Jaguar I-Pace",
    productCode : "GDN-023",
    releaseDate : "January 10 2019",
    price : 10000000,
    imageUrl : "https://www.challenges.fr/assets/img/2018/06/01/cover-r4x3w1000-5c7d4b767d2f0-jaguar-i-pace-event-extras-032-jpg.jpg",
}]
}
