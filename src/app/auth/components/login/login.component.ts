import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  hide = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  getErrorMessage(validatorName: string) :string {
    if(validatorName === 'required'){
      return `Can't be empty`
    }
    if(validatorName === 'email'){
      return `Please type email`
    }
    return `Invalid enter` ;
  }

  onSubmit() {
    //if (!this.loginForm.value) {
    //  return;
    //}
    console.log(`name: ${this.loginForm.value.name}, email: ${this.loginForm.value.email}, password: ${this.loginForm.value.password}`);
    this.loginForm.reset()
    //or
    //this.loginForm.pathValue
    
  }
}
