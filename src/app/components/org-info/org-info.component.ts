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
  currentClipIndex = 0;
  isAnimating = false;

  clips = [
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
      description: 'High-level execution and map awareness in a ranked match.',
      videoUrl: 'League of Legends_05-18-2026_23-30-34-615.mp4'
    }
  ];

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
