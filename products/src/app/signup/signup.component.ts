import { Component, OnInit } from '@angular/core';
import { signupModel } from './signup.Model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  confirmPass = ''
  signupdata = new signupModel(null, null, null, null, null);
  constructor() { }

  ngOnInit(): void {
  }
  signup() {
    console.log(this.signupdata);
  }
}
