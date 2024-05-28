import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.css'
})
export class FlightComponent {
  flightForm!: FormGroup

  dateTime: string = '';
  travelFrom: string = '';
  travelTo: string = '';
  preferredClass: string = '';
  preferredSeat: string = '';
  name: string = '';
  age: number = 0;
  mobileNumber: string = '';
  paymentMethod: string = '';

  constructor(private http: HttpClient, private fb: FormBuilder) {
  }
  baseurl: string = "http://localhost:8080/"
  ngOnInit(): void {
    this.flightForm = this.fb.group({
      dateTime: [''],
      travelFrom: [''],
      travelTo: [''],
      preferredClass: [''],
      preferredSeat: [''],
      name: [''],
      age: [0],
      mobileNumber: [''],
      paymentMethod: ['']
    });
  }

  lstofusr: any = []
  bookTicket(): void {
   console.log(this.lstofusr)
    this.http.post(this.baseurl + "plane/bookTick", this.flightForm.value).subscribe(data => {
        const seatNumber = this.generateRandomSeatNumber();
        const alertMessage = `Your ticket is booked successfully!\n\nSeat Number: ${seatNumber}`;
        alert(alertMessage);
        this.resetForm();
      }, error => {
        this.showRequiredFieldsAlert();
      })
    
      

  }

  isFormValid(): boolean {
    return (
      !!this.dateTime &&
      !!this.travelFrom &&
      !!this.travelTo &&
      !!this.preferredClass &&
      !!this.preferredSeat &&
      !!this.name &&
      this.age > 0 &&
      !!this.mobileNumber &&
      !!this.paymentMethod
    );
  }

  resetForm(): void {
    this.dateTime = '';
    this.travelFrom = '';
    this.travelTo = '';
    this.preferredClass = '';
    this.preferredSeat = '';
    this.name = '';
    this.age = 0;
    this.mobileNumber = '';
    this.paymentMethod = '';
  }

  generateRandomSeatNumber(): string {
    // Placeholder for generating a random seat number (e.g., '6473')
    return Math.floor(Math.random() * 10000).toString();
  }

  showRequiredFieldsAlert(): void {
    alert('Please fill out all required fields.');
  }

}
