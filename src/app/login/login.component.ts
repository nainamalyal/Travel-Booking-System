import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  loginform: FormGroup;
  
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  baseurl: string = "http://localhost:8080/";

  onSubmit(): void {
    if (this.loginform.valid) {
     
    }
    
    const formData = this.loginform.value;
    this.http.post(this.baseurl + "user/userlogin", formData).subscribe(
      response => {
        if (response) {
          alert("Login Successfully...!");
          this.router.navigate(["home"]);
          console.log(response);
 
        }else{
          alert("Invalid Login..!")
          
        }
      }, err => {
        alert("Something Went to wrong...!");
      });
  }
}

