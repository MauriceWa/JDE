import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-org-info',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './org-info.component.html',
  styleUrl: './org-info.component.css'
})
export class OrgInfoComponent {
  activeTab = 'tournaments';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
