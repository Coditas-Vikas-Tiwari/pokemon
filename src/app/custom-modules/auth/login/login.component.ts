import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!:FormGroup
  formSubmitted : boolean = false; 
    constructor(public fb:FormBuilder, private authService:AuthService, private router:Router) { }
  
    ngOnInit(): void {
  this.form = this.fb.group({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  })
    }
  
    onSubmit(form:FormGroup){
      if(this.form.valid){
        this.authService.postLoginData(form.value).subscribe((res) => {
          console.log(res);
         localStorage.setItem('token', res.data.token);
         //navigate to homepage
         this.router.navigate(['/home']);
        });
      }
      else{
        this.formSubmitted = true;
      }
    }
  
}
