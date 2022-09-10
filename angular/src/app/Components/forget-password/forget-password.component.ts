import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/Services/share-data.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private _ShareDataService:ShareDataService) { }
  ngOnInit(): void {
  }

}
