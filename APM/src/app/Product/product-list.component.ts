import {Component, OnInit} from '@angular/core';
import { Iproduct } from './product';
import { ProductService } from './product.service';

@Component({
selector:'pm-products',
templateUrl: './product-list.component.html',
styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2; 
    showImage: boolean = false;
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string)
    {
        this._listFilter = value;
        this.filterProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filterProducts: Iproduct[];
    products: Iproduct[] = [];

    constructor(private productService : ProductService) {
        // this._listFilter = 'cart';
    }

    onRatingClicked(message: string) : void 
    {
        this.pageTitle = 'Product List: ' + message;
    }

    performFilter(filterBy: string) : Iproduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: Iproduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filterProducts = this.products;
            },
            error => this.errorMessage = <any> error
        );
    }
}
