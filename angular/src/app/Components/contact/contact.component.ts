import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/Services/share-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private _ShareDataService:ShareDataService) { }

  ngOnInit(): void {
  }

}
