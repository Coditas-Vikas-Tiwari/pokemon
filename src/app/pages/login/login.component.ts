import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
form!:FormGroup
formSubmitted : boolean = false; 
  constructor(public fb:FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
this.form = this.fb.group({
  email: new FormControl('',[Validators.required, Validators.email]),
  password: new FormControl('',[Validators.required, Validators.minLength(6)])
})
  }

  onSubmit(form:FormGroup){
    if(this.form.valid){
      this.authService.postLoginData(form.value).subscribe((res) => {
        alert(res.data.token);
      });
    }
    else{
      this.formSubmitted = true;
    }
  }

}
