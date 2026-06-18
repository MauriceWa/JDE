import { Component, inject, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import { OrgDataService } from '../../services/org-data.service';

interface Clip {
  title: string;
  description: string;
  videoUrl: string;
  profileUrl?: string;
}

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
export class OrgInfoComponent implements OnInit {
  private orgDataService = inject(OrgDataService);

  activeTab = 'tournaments';
  currentClipIndex = 0;
  isAnimating = false;
  stats = {
    activeTeams: 0,
    openSpots: 0,
    filledSpots: 0,
    staffAmount: 0
  };

  clips: Clip[] = [
    {
      title: 'Solo Queue Dominance',
      description: 'A clinical display of mechanics in a high-elo ranked match.',
      videoUrl: 'League-of-Legends__2026-03-25__01-23-59.mp4'
    },
    {
      title: 'Ranked Outplay',
      description: 'Clutch decision making during a heated ranked game sequence.',
      videoUrl: 'League of Legends_05-18-2026_23-40-27-210.mp4'
    },
    {
      title: 'Competitive Edge',
      description: 'High level execution and map awareness in a ranked match.',
      videoUrl: 'League of Legends_05-18-2026_23-30-34-615.mp4'
    },
    {
      title: 'Simply Effective',
      description: 'Astro (Jungler) landing a massive Hecarim ultimate.',
      videoUrl: 'Epic-Move-453.mp4'
    },
    {
      title: 'Estrelic Synergy',
      description: 'Team Estrelic combining their ults and having a blast.',
      videoUrl: 'dretas clip1.mp4'
    },
    {
      title: 'Vyre Teamfight',
      description: 'Team Vyre performing an incredible teamfight.',
      videoUrl: '0f4bd22d-8cbb-47a7-a101-b3ad7051ebb3.mp4'
    }
  ];

  ngOnInit() {
    this.stats = this.orgDataService.getStats();
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  nextClip() {
    if (this.isAnimating) return;

    this.isAnimating = true;
    setTimeout(() => {
      this.currentClipIndex = (this.currentClipIndex + 1) % this.clips.length;
      this.isAnimating = false;
    }, 500);
  }

  prevClip() {
    if (this.isAnimating) return;

    this.isAnimating = true;
    setTimeout(() => {
      this.currentClipIndex = (this.currentClipIndex - 1 + this.clips.length) % this.clips.length;
      this.isAnimating = false;
    }, 500);
  }
}
