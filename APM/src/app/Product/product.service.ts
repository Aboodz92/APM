import { Iproduct } from "./product";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    getProducts() : Iproduct[] {
        return [
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "ReleaseDate": "March 18, 2016",
                "Description": "15 gallon capacity rolling garden",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            },
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "ReleaseDate": "May 21, 2016",
                "Description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            }
        ];
    }
}