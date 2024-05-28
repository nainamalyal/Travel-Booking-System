import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css'
})
export class MyBookingsComponent {
  bookedTickets: any[] = [
    { type: 'bus', details: 'Bus Ticket Details 1' },
    { type: 'train', details: 'Train Ticket Details 1' },
    { type: 'plane', details: 'Plane Ticket Details 1' },
    { type: 'bus', details: 'Bus Ticket Details 2' },
    { type: 'train', details: 'Train Ticket Details 2' },
    { type: 'plane', details: 'Plane Ticket Details 2' }
  ];

  constructor(private router: Router) {} 

  cancelTicket(ticket: any): void {
    const confirmCancel = confirm('Do you really want to cancel?');

    if (confirmCancel) {
      // Remove the ticket from bookedTickets array
      this.bookedTickets = this.bookedTickets.filter(t => t !== ticket);
      alert('Ticket canceled successfully. Money will be refunded in the next 24 hours.');

      // Redirect to the home component after cancellation
      this.router.navigateByUrl('/home');
    }
  }


}
