import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/Services/share-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _ShareDataService:ShareDataService) {
  }

  ngOnInit(): void {
    this._ShareDataService.showHeader()
  }

}
