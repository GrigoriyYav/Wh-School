import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;

  hide = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  getErrorMessage(validatorName:string) :string {
    if(validatorName === 'required'){
      return `You must enter a value`
    }
    if(validatorName === 'email'){
      return `Please type email`
    }
    if(validatorName === 'minlength'){
      return `Min length 3`
    }
    return `Invalid enter` ;
  }

  onSubmit() {
    //if (!this.signUpForm.value) {
    //  return;
    //}
    console.log(`name: ${this.signUpForm.value.name}, email: ${this.signUpForm.value.email}, password: ${this.signUpForm.value.password}`);
    this.signUpForm.reset();
  }
}
