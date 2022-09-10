import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShareDataService } from 'src/app/Services/share-data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // registerForm: FormGroup = new FormGroup({
  //   "name" : new FormControl(null , [Validators.pattern("/^([a-zA-Z]+[,.]?[ ]?|[a-z]+['-]?)+$/)]") , Validators.required]),
  //   "email" : new FormControl(null , [Validators.email , Validators.required]),
  //   "password" : new FormControl(null , [Validators.pattern("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,10}$/)]")  , Validators.required]),
  //   "confirm-pass" : new FormControl(null , [Validators.required]),
  //   "phone" : new FormControl(null ,  [Validators.required]),
  // })
  constructor(private _ShareDataService:ShareDataService) { }
  ngOnInit(): void {
  }
  togglePass() {
    const input = document.querySelector(".custom-input input");
    if (input?.getAttribute("type") == "text") {
      input?.setAttribute("type", "password");
    } else {
        input?.setAttribute("type", "text");
    }
  }
  toggleConfirmPass() {
    const input = document.querySelector(".custom-input.confirm-pass input");
    if (input?.getAttribute("type") == "text") {
      input?.setAttribute("type", "password");
    } else {
        input?.setAttribute("type", "text");
    }
  }
}
