import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  countries = [];
  //shippingCosts = this.cartService.getShippingPrices().subscribe(countries => this.countries = countries);
  shippingCosts = this.cartService.getShippingPrices();
  //shippingCosts = this.http.get<{type: string, price: number}[]>('/assets/shipping.json')

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  printShippingPrices() {
    window.alert(this.countries);
    //console.log("Hi");
  }

}
