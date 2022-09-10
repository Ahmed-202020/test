import { Injectable } from '@angular/core';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  constructor() { }
  showHeader() {
    $(".header h1:first").fadeIn(500);
    $(".header h1:nth(1)").fadeIn(1500);
    $(".header h1:nth(2)").fadeIn(2500);
    $(".header h1:nth(3)").fadeIn(3500);
    $(".header h1:nth(4)").fadeIn(4500);
  }
}
