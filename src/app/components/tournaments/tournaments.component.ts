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
      name: 'Jung Dogs Cup',
      date: 'Early August 2026',
      status: 'Upcoming',
      prizepool: 'None',
      description: 'Our first official tournament.'
    },
    {
      name: 'Jung Dog Trials ',
      date: '5th of June 2026',
      status: 'Completed',
      prizepool: 'TBD',
      description: 'Our trial open tournament for all League of Legends teams.'
    },
  ];
}
