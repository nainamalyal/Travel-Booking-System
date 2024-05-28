import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  signupform!:FormGroup

  name: string = ''; 
  mobileNo: string = ''; 
  email: string = ''; 
  address: string = ''; 
  username:string ='';
  password:string='';

  constructor(private http:HttpClient,private fb:FormBuilder,private route:Router) { }
 

  baseurl:any = "http://localhost:8080"

  ngOnInit():void{
    this.signupform = this.fb.group({
      name:[''],
      mobileNo:[''],
      email:[''],
      address:[''],
      username:[''],
      password:[''],
    })
  }
  signUp(): void {
    this.http.post(this.baseurl+"/user/saveuser",this.signupform.value).subscribe(data=>{
      alert("Sign Up Successfully...!")
      this.signupform.reset()
    },error=>{
      alert("Something went to wrong..!")
    })

  }

  isFormValid(): boolean {
    return !!this.name && !!this.mobileNo && !!this.email && !!this.address && !!this.username && !!this.password;
  }

  resetForm(): void {
    this.name = '';
    this.mobileNo = '';
    this.email = '';
    this.address = '';
    this.username='';
    this.password='';
  }

}
