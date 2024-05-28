import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrl: './buses.component.css'
})
export class BusesComponent {
  busForm!: FormGroup

  dateTime: string = '';
  travelFrom: string = '';
  travelTo: string = '';
  preferredSeat: string = '';
  name: string = '';
  age: number = 0;
  mobileNumber: string = '';
  paymentMethod: string = '';
  constructor(private http: HttpClient, private fb: FormBuilder) {
  }
  lstofbooking: any = []
  ngOnInit(): void {
    this.busForm = this.fb.group({
      dateTime: [''],
      travelFrom: [''],
      travelTo: [''],
      preferredSeat: [''],
      name: [''],
      age: [0],
      mobileNumber: [''],
      paymentMethod: ['']
    });
  }

  baseurl: string = "http://localhost:8080/"

  bookTicket(): void {
    this.http.post(this.baseurl + "busbooking/bookbus", this.busForm.value).subscribe(data => {
      console.log(this.busForm.value)
      const seatNumber = this.generateRandomSeatNumber();
      const alertMessage = `Your ticket is booked successfully!\n\nSeat Number: ${seatNumber}`;
      alert(alertMessage);
      if (!this.isFormValid()) {
        alert('Please fill in all required fields.');
        return;
      }
    }, error => {
      alert("error")
    })


    this.resetForm();
  }

  isFormValid(): boolean {
    return (
      !!this.dateTime &&
      !!this.travelFrom &&
      !!this.travelTo &&
      !!this.preferredSeat &&
      !!this.name &&
      this.age > 0 &&
      !!this.mobileNumber &&
      !!this.paymentMethod
    );
  }


  generateRandomSeatNumber(): string {
    return Math.floor(Math.random() * 100).toString();
  }

  resetForm(): void {
    this.dateTime = '';
    this.travelFrom = '';
    this.travelTo = '';
    this.preferredSeat = '';
    this.name = '';
    this.age = 0;
    this.mobileNumber = '';
    this.paymentMethod = '';

  }

}
