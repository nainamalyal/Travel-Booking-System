import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent {
  schedules: any[] = []; // Array to hold all schedule items
  filteredSchedule: any[] = []; // Array to hold filtered schedule items

  filterDate: string = '';
  filterTime: string = '';
  filterFromCity: string = '';
  filterToCity: string = '';

  constructor(private router: Router) { // Inject Router in the constructor
    // Initialize schedules with sample data (buses, trains, planes)
    this.schedules = [
      { title: 'Bus Schedule', date: '2024-05-10', time: '10:00 AM', fromCity: 'City A', toCity: 'City B', type: 'bus' },
      { title: 'Train Schedule', date: '2024-05-11', time: '12:00 PM', fromCity: 'City B', toCity: 'City C', type: 'train' },
      { title: 'Plane Schedule', date: '2024-05-12', time: '2:00 PM', fromCity: 'City C', toCity: 'City D', type: 'plane' }
    ];

    // Initialize filteredSchedule with all schedules
    this.filteredSchedule = this.schedules;
  }

  applyFilters(): void {
    // Apply filters based on user input
    this.filteredSchedule = this.schedules.filter(item =>
      (!this.filterDate || item.date === this.filterDate) &&
      (!this.filterTime || item.time === this.filterTime) &&
      (!this.filterFromCity || item.fromCity.toLowerCase().includes(this.filterFromCity.toLowerCase())) &&
      (!this.filterToCity || item.toCity.toLowerCase().includes(this.filterToCity.toLowerCase()))
    );
  }

  bookTicket(scheduleItem: any): void {
    // Redirect to the Book Ticket page based on the schedule item type
    if (scheduleItem.type === 'bus') {
      // Navigate to bus ticket booking page
      this.router.navigateByUrl('/bookings/buses');
      console.log('Booking bus ticket for:', scheduleItem.title);
    } else if (scheduleItem.type === 'train') {
      // Navigate to train ticket booking page
      this.router.navigateByUrl('/bookings/train');
      console.log('Booking train ticket for:', scheduleItem.title);
    } else if (scheduleItem.type === 'plane') {
      // Navigate to plane ticket booking page
      this.router.navigateByUrl('/bookings/flight');
      console.log('Booking plane ticket for:', scheduleItem.title);
    }
  }
}
