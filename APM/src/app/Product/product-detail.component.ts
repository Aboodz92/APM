import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: Iproduct;

  constructor(private rout: ActivatedRoute, private router: Router) { 
    console.log(this.rout.snapshot.paramMap.get('id'))
  }

  ngOnInit() {
    let id = +this.rout.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;

    this.product = {
      
        "productId": id,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "ReleaseDate": "March 18, 2016",
        "Description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
      
    }
  }

  onBack(): void {
    this.router.navigate(['/products'])
  }

}
