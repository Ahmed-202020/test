import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup = new FormGroup({
      "email": new FormControl(null, [Validators.email, Validators.required]),
      "password": new FormControl(null, [Validators.pattern("{3 , 8}"), Validators.required]),
  })
  constructor() { }
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

}
