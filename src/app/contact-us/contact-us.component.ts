import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {

  contactForm!: FormGroup
  lstofusrs: any = []
  name:string= ''; 
  email:  string= '';
  message: string= '';
  phno: string= '';

  constructor(private http: HttpClient, private fb: FormBuilder, private route: Router) {

  }
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
      phno: ['', Validators.required]

    }
    )
  }
  baseurl: string = "http://localhost:8080"

  sendMessage(): void {
    console.log(this.lstofusrs)
    this.http.post(this.baseurl + "/addcontact", this.contactForm.value).subscribe(data => {
      alert("Thank You for Contacting..!")
    },
      error => {
        alert("Something went to wrong...!")
      })
    // this.route.navigate(['/home'])
  }

}
