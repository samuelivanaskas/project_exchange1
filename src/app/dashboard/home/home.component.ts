import { Component, OnInit } from '@angular/core';
import {HttpClient, } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public titulo : string = "preço Bitcoin:";
  public precoBitcoin : any;
  constructor(private http: HttpClient){}


  ngOnInit(): void {
    this.precoBitcoin = this.http.get('https://www.mercadobitcoin.net/api/BTC/ticker')
    .subscribe(response => this.precoBitcoin = response)
  }
}
