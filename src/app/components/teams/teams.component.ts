import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  teams = [
    {
      name: 'Jung Dogs Estrelic',
      role: 'Northern Team',
      rank: 'Diamond/Master',
      members: ['Top: Kaenic', 'Jungle: Astro', 'Mid: Navy', 'ADC: Touanité', 'Support: Dretas'],
      substitutes: ['Sub 1: Gollumfish', 'Sub 2: OPEN']
    },
    {
      name: 'Jung Dogs Vyre',
      role: 'Western Team',
      rank: 'Master',
      members: ['Top: Kamazo', 'Jungle: OPEN', 'Mid: Minus-one', 'ADC: DegeMic', 'Support: OPEN'],
      substitutes: ['Sub 1: OPEN', 'Sub 2: OPEN']
    }
  ];
}
