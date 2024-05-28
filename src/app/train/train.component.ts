import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MyBookingsComponent } from '../my-bookings/my-bookings.component';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrl: './train.component.css'
})
export class TrainComponent implements OnInit {

  trainform!: FormGroup;

  dateTime: string = '';
  travelFrom: string = '';
  travelTo: string = '';
  preferredCoach: string = '';
  preferredSeat: string = '';
  name: string = '';
  age: number = 0;
  mobileNumber: string = '';
  paymentMethod: string = '';


  constructor(private http:HttpClient,private fb:FormBuilder) {
  
    }
    book!:MyBookingsComponent;
    lstofbooking:any=[]
    baseurl: string = "http://localhost:8080/"

    ngOnInit(): void {
      this.trainform = this.fb.group({ 
        dateTime: [''], 
        travelFrom: [''],
        travelTo: [''],
        preferredCoach: [''],
        preferredSeat: [''],
        name: [''],
        age: [0],
        mobileNumber: [''],
        paymentMethod: ['']
      });
    }
    
    
  bookTicket(): void {
   console.log(this.lstofbooking)
      this.http.post(this.baseurl+"trainbook/bookticket",this.trainform.value).subscribe(
        (data:any )=>{
          
          const PNR = this.generateRandomPNR();
          const seatNumber = this.generateRandomSeatNumber();
          const coachName = this.preferredCoach;
        
          const alertMessage = `Your ticket is booked successfully!\n\nPNR Number: ${PNR}\nSeat Number: ${seatNumber}\nCoach: ${coachName}`;
          alert(alertMessage);
           this.trainform.reset()
        },
        error=>{
          alert("Something Went to wrong..!")
          console.log(error)
        }
      );

  }

  
  isFormValid(): boolean {
    
    return (
      !!this.dateTime &&
      !!this.travelFrom &&
      !!this.travelTo &&
      !!this.preferredCoach &&
      !!this.preferredSeat &&
      !!this.name &&
      this.age > 0 &&
      !!this.mobileNumber &&
      !!this.paymentMethod
    );

  }

  
  generateRandomPNR(): string {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  }

  
  generateRandomSeatNumber(): string {
    return Math.floor(1 + Math.random() * 100).toString();
  }

  resetForm(): void {
    this.dateTime = '';
    this.travelFrom = '';
    this.travelTo = '';
    this.preferredCoach = '';
    this.preferredSeat = '';
    this.name = '';
    this.age = 0;
    this.mobileNumber = '';
    this.paymentMethod = '';
  }
}
