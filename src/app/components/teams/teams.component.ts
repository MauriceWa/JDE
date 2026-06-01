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
      role: 'NLC Team',
      rank: 'Diamond/Master',
      members: ['Top: Kaenic', 'Jungle: Gollumfish', 'Mid: Navy', 'ADC: OPEN', 'Support: Dretas'],
      substitutes: ['Sub 1: Astro', 'Sub 2: OPEN'],
      schedule: [
        { day: 'Wednesday', time: '20:30 CET', event: 'Scrims' },
        { day: 'Thursday', time: '19:00 CET', event: 'Scrims' },
        { day: 'Saturday', time: '14:00 CET', event: 'Scrims' },
        { day: 'Sunday', time: '14:00 CET', event: 'Scrims' }
      ]
    },
    {
      name: 'Vyre',
      role: 'BENELUX Team',
      rank: 'Master',
      members: ['Top: Kamazo', 'Jungle: OPEN', 'Mid: Minus-one', 'ADC: DegeMic', 'Support: KrayonBlaDe'],
      substitutes: ['Sub 1: Esat', 'Sub 2: OPEN'],
      schedule: [
        { day: 'Wednesday', time: '19:00 CET', event: 'Scrims' },
        { day: 'Saturday', time: '19:00 CET', event: 'Scrims' }
      ]
    },
    {
      name: 'Hyperion',
      role: 'DACH Team',
      rank: 'Master',
      members: ['Top: OPEN', 'Jungle: OPEN', 'Mid: FILLED', 'ADC: OPEN', 'Support: TRYOUTS ONGOING'],
      substitutes: ['Sub 1: OPEN', 'Sub 2: OPEN'],
      schedule: [
      ]
    },
    {
      name: 'Molotov',
      role: 'UK Team',
      rank: 'Master',
      members: ['Top: Kamazo', 'Jungle: Robert123', 'Mid: TRYOUTS ONGOING', 'ADC: Hisoka', 'Support: Pelican'],
      substitutes: ['Sub 1: OPEN', 'Sub 2: OPEN'],
      schedule: [
        { day: 'Tuesday', time: '19:00 CET', event: 'Scrims' },
        { day: 'Friday', time: '19:00 CET', event: 'Scrims' }
      ]
    }
  ];

  generalSubstitutes = {
    name: 'Substitutes list',
    role: 'Substitutes',
    rank: 'Emerald/Master',
    members: ['Tilko185', 'Esat', 'Astro', 'Kasumi', 'Ihwa',],
    substitutes: [],
  };

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
