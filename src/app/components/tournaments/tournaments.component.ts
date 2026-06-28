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
      date: '8th of August 2026',
      status: 'Upcoming',
      prizepool: 'None',
      description: 'Prove your worth in our official League of Legends tournament.',
      link: 'https://www.challengermode.com/tournaments/d3e09f4b-b169-43a2-a165-08decf4ad291?UTM_Campaign=SharedTournament'
    },
    {
      name: 'Jung Dog Trials ',
      date: '5th of June 2026',
      status: 'Completed',
      prizepool: 'None',
      description: 'Our trial open tournament for all League of Legends teams.',
      link: 'https://discord.gg/g6p7dHjAa9'
    },
  ];
}
