import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  profileUrl?: string;
}

interface Team {
  name: string;
  role: string;
  rank: string;
  members: TeamMember[];
  substitutes: TeamMember[];
  schedule: { day: string; time: string; event: string }[];
}

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  teams: Team[] = [
    {
      name: 'Estrelic',
      role: 'NLC Team',
      rank: 'Diamond/Master',
      members: [
        { name: 'Top: Kaenic' },
        { name: 'Jungle: Gollumfish' },
        { name: 'Mid: Navy' },
        { name: 'ADC: OPEN' },
        { name: 'Support: Dretas', profileUrl: 'https://www.youtube.com/@DretasOfficial/videos' }
      ],
      substitutes: [
        { name: 'Sub 1: Astro' },
        { name: 'Sub 2: OPEN' }
      ],
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
      members: [
        { name: 'Top: Kamazo' },
        { name: 'Jungle: Jhon WEAKKK' },
        { name: 'Mid: Minus-one' },
        { name: 'ADC: DegeMic' },
        { name: 'Support: KrayonBlaDe' }
      ],
      substitutes: [
        { name: 'Sub 1: Esat' },
        { name: 'Sub 2: OPEN' }
      ],
      schedule: [
        { day: 'Wednesday', time: '19:00 CET', event: 'Scrims' },
        { day: 'Saturday', time: '19:00 CET', event: 'Scrims' }
      ]
    },
    {
      name: 'Hyperion',
      role: 'DACH Team',
      rank: 'Master',
      members: [
        { name: 'Top: OPEN' },
        { name: 'Jungle: OPEN' },
        { name: 'Mid: FILLED' },
        { name: 'ADC: OPEN' },
        { name: 'Support: TRYOUTS ONGOING' }
      ],
      substitutes: [
        { name: 'Sub 1: OPEN' },
        { name: 'Sub 2: OPEN' }
      ],
      schedule: [
      ]
    },
    {
      name: 'Molotov',
      role: 'UK Team',
      rank: 'Master',
      members: [
        { name: 'Top: Kamazo' },
        { name: 'Jungle: Robert123' },
        { name: 'Mid: TRYOUTS ONGOING' },
        { name: 'ADC: Hisoka' },
        { name: 'Support: Pelican' }
      ],
      substitutes: [
        { name: 'Sub 1: OPEN' },
        { name: 'Sub 2: OPEN' }
      ],
      schedule: [
        { day: 'Tuesday', time: '19:00 CET', event: 'Scrims' },
        { day: 'Friday', time: '19:00 CET', event: 'Scrims' }
      ]
    }
  ];

  generalSubstitutes: { name: string; role: string; rank: string; members: TeamMember[]; substitutes: TeamMember[] } = {
    name: 'Substitutes list',
    role: 'Substitutes',
    rank: 'Emerald/Master',
    members: [
      { name: 'Tilko185' },
      { name: 'Esat' },
      { name: 'Astro' },
      { name: 'Kasumi' },
      { name: 'Ihwa' }
    ],
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
