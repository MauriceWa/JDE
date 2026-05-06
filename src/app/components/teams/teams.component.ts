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
      name: 'Estrelic',
      role: 'Northern Team',
      rank: 'Diamond/Master',
      members: ['Top: Kaenic', 'Jungle: Astro', 'Mid: Navy', 'ADC: Touanité', 'Support: Dretas'],
      substitutes: ['Sub 1: Gollumfish', 'Sub 2: OPEN']
    },
    {
      name: 'Vyre',
      role: 'Western Team',
      rank: 'Master',
      members: ['Top: Kamazo', 'Jungle: OPEN', 'Mid: Minus-one', 'ADC: DegeMic', 'Support: Tarquin'],
      substitutes: ['Sub 1: Mika', 'Sub 2: OPEN']
    },
    {
      name: 'Dev',
      role: 'Western Team',
      rank: 'Master',
      members: ['Top: OPEN', 'Jungle: OPEN', 'Mid: OPEN', 'ADC: OPEN', 'Support: OPEN'],
      substitutes: ['Sub 1: OPEN', 'Sub 2: OPEN']
    }

  ];

  staff = [
    {
      name: 'Mattie',
      role: 'Founder',
      description: 'Leads Jung Dogs Esports at a strategic level, overseeing long-term vision, growth, ' +
        'and overall direction of the organization.'
    },
    {
      name: 'Mauwa',
      role: 'Head of Operations',
      description: 'Responsible for roster building, recruitment, and competitive structure. ' +
        'Oversees team development and ensures performance standards across all rosters.'
    },
    {
      name: 'Amarok',
      role: 'HEAD COACH',
      description: 'Leads the competitive development of Estrelic, focusing on team cohesion, game strategy, ' +
        'and consistent performance improvement.'
    },
    {
      name: 'DegeMic',
      role: 'OPERATIONS STAFF',
      description: 'Supports day to day operations and assists in maintaining structure across teams and ' +
        'internal processes.'
    },
    {
      name: 'Ailis',
      role: 'ADMINISTRATION COORDINATOR',
      description: 'Oversees administrative processes and enforces structure across teams, ' +
        'supporting daily operations and maintaining internal consistency.'
    },
    {
      name: 'Toxic',
      role: 'ANALYST',
      description: 'Analyzes gameplay, opponents, and performance data to support strategic preparation and ' +
        'improve team decision-making.'
    }
  ];
}
