import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tournaments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.css'
})
export class TournamentsComponent {
  tournaments = [
    {
      name: 'Jung Dogs Autumn Open',
      date: 'May 2026',
      status: 'Upcoming',
      prizepool: 'TBD',
      description: 'Our trial open tournament for all League of Legends teams.'
    },
    // {
    //   name: 'Spring Split Invitational',
    //   date: 'March 2026',
    //   status: 'Completed',
    //   prizepool: '$1000',
    //   description: 'A prestigious invitational featuring the top 8 teams.'
    // }
  ];
}
