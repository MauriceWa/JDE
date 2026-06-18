import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgDataService } from '../../services/org-data.service';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  private orgDataService = inject(OrgDataService);

  teams = this.orgDataService.teams;
  generalSubstitutes = this.orgDataService.generalSubstitutes;
  staff = this.orgDataService.staff;
}
