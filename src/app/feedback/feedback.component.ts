import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackform!: FormGroup;
  lstoffeedback: any = [];

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.feedbackform = this.fb.group({
      name: ['', Validators.required], 
      city: ['', Validators.required], 
      feedback: ['']
    });
  }
  baseurl : any="http://localhost:8080/"
  onSubmit(): void {
    if (this.feedbackform.valid) { 
      this.http.post(this.baseurl + 'submitFeedback', this.feedbackform.value)
        .subscribe(
          data => {
            console.log(this.feedbackform.value)
            alert('Feedback Submitted Successfully!');
          },
          error => {
            alert('Something Went Wrong!');
            console.error(error);
          }
        );
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
