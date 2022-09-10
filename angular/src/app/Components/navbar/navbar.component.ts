import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { ShareDataService } from 'src/app/Services/share-data.service';

declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  ls: any = localStorage.getItem("langName");
  ls2: any = localStorage.getItem("langType");
  ls3: any = localStorage.getItem("dir");
  lang: string = this.ls || "English";
  type: string = this.ls2 || "en";
  dir: string = this.ls3 || "rtl";
  constructor(private translate: TranslateService , private _ShareDataService:ShareDataService) {}
  ngOnInit(): void {
    $("html").attr("dir", this.dir);
    this.translate.use(this.type);
  }
  switchLang() {
    if (this.lang == "English" && ($("html").attr("dir") == this.dir)) {
      this.dir = "ltr";
      $("html").attr("dir", this.dir);
      this.lang = "عربي";
      this.type = "en";
      this.translate.use(this.type);
      localStorage.setItem("langName", this.lang);
      localStorage.setItem("langType", this.type);
      localStorage.setItem("dir", this.dir);
    } else {
      this.dir = "rtl";
      $("html").attr("dir", this.dir);
      this.lang = "English";
      this.type = "ar";
      this.translate.use(this.type);
      localStorage.setItem("langName", this.lang);
      localStorage.setItem("langType", this.type);
      localStorage.setItem("dir", this.dir);
    }
  }
}
