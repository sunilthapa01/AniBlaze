import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss'
})
export class DashBoardComponent {
  ShowArr: boolean = false;
  ArrayList = {
    "users": [
      {
        "id": 1,
        "name": "Aarav Mehta",
        "email": "aarav.mehta@example.com",
        "age": 28,
        "isActive": true,
        "address": {
          "city": "Mumbai",
          "country": "India"
        }
      },
      {
        "id": 2,
        "name": "Sophia Patel",
        "email": "sophia.patel@example.com",
        "age": 24,
        "isActive": false,
        "address": {
          "city": "Ahmedabad",
          "country": "India"
        }
      },
      {
        "id": 3,
        "name": "Rohan Das",
        "email": "rohan.das@example.com",
        "age": 31,
        "isActive": true,
        "address": {
          "city": "Delhi",
          "country": "India"
        }
      }
    ],
    "meta": {
      "totalUsers": 3,
      "success": true
    }
  }

  check = this.ArrayList.users.slice(0, 4);
  

}

