import { Component , OnInit } from '@angular/core';

declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RealEstatey';
  constructor() {}
  
  ngOnInit():void{
    if($("html").attr("dir") == "ltr"){
      // $("html head link").attr("href" , "styles-en.css") ;
    }else{
      // $("html head link").attr("href" , "styles-ar.css") ;
    }
  }
  
}
