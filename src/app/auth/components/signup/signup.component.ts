import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;

  hide = true;

  constructor(private fb: FormBuilder, public authService: AuthService) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  getErrorMessage(validatorName:string) :string {
    switch (validatorName) {
      case 'required':
        return( "Can't be empty" );
      case 'email':
        return( `Please type email` );
      case 'minlength':
        return( `Min length 3` );
      default:
        return( `Invalid enter` );
    }
  }

  onSubmit() {
    //if (!this.signUpForm.value) {
    //  return;
    //}
    //console.log(`name: ${this.signUpForm.value.name}, email: ${this.signUpForm.value.email}, password: ${this.signUpForm.value.password}`);
    this.authService.SignUp(this.signUpForm.value);

    this.signUpForm.reset();
  }
}
