import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  hide = true;

  constructor(private fb: FormBuilder, public authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  getErrorMessage(validatorName: string) :string {
    switch (validatorName) {
      case 'required':
        return( "Can't be empty" );
      case 'email':
        return( `Please type email` );
      default:
        return( `Invalid enter` );
    }
  }

  onSubmit() {
    //if (!this.loginForm.value) {
    //  return;
    //}
    //console.log(`email: ${this.loginForm.value.email}, password: ${this.loginForm.value.password}`);
    this.authService.LogIn(this.loginForm.value);
    this.loginForm.reset()
    //or
    //this.loginForm.pathValue
    
  }
}
