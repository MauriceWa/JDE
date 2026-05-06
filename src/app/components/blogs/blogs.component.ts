import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit {
  private http = inject(HttpClient);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  selectedBlog: any = null;
  latestUpdates: any[] = [];

  blogs = [
    {
      title: 'Welcome to Jung Dogs Esports',
      date: 'April 20, 2026',
      summary: 'Exciting news as we officially launch our new organizational website and team rosters!',
      content: 'We are thrilled to announce the official launch of Jung Dogs Esports! Our new website serves as a hub for all our tournament information, blog updates, and community engagement. We have been working hard behind the scenes to assemble top-tier rosters for League of Legends and other competitive titles. Stay tuned for more updates as we continue to grow and compete at the highest levels.',
      author: 'Management'
    }
  ];

  ngOnInit() {
    this.generateUpdates();
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.titleService.setTitle('Blogs | Jung Dogs Esports');
    this.metaService.updateTag({ name: 'description', content: 'Stay updated with the latest news, patch notes, and organizational updates from Jung Dogs Esports.' });
    this.metaService.updateTag({ name: 'keywords', content: 'esports, blogs, league of legends, patch notes, jung dogs esports' });
  }

  generateUpdates() {
    const updates: any[] = [
      { date: 'May 6', name: 'Akini', role: 'Jungler', action: 'Joined' },
      { type: 'tournament', date: 'May 2', name: 'Vyre | Benelux Ascend Series', role: 'Open Qualifier 3', action: 'DNF' },
      { date: 'May 3', name: 'Brunooo', role: 'Jungle', action: 'Left' },
      { date: 'Apr 29', name: 'Sayonara', role: 'Analyst', action: 'Joined' },
      { date: 'Apr 28', name: 'Toxic', role: 'Analyst', action: 'Joined' },
      { date: 'Apr 25', name: 'tilko185', role: 'Substitute', action: 'Joined' },
      { date: 'Apr 25', name: 'Save3rs', role: 'Coach', action: 'Joined' },
      { date: 'Apr 20', name: 'Tarquin', role: 'Support', action: 'Joined' },
      { date: 'Apr 19', name: 'Kayron', role: 'Support', action: 'Left' },
      { date: 'Apr 19', name: 'Brunooo', role: 'Jungle', action: 'Joined' },
      { type: 'tournament', date: 'Apr 18', name: 'Estrelic | Odoo Arena 2026', role: 'Odoo', action: '2nd place' },
      { type: 'tournament', date: 'Apr 18', name: 'Vyre | Benelux Ascend Series', role: 'Open Qualifier 2', action: 'DNF' },
      { date: 'Apr 16', name: 'Jhon WEAKKK', role: 'Jungle', action: 'Left' },
      { date: 'Apr 14', name: 'Mika', role: 'Substitute', action: 'Joined' },
      { date: 'Apr 11', name: 'Amarok1050', role: 'Coach', action: 'Joined' },
      { date: 'Apr 8', name: 'minus_one', role: 'Midlaner', action: 'Joined' },
      { date: 'Mar 30', name: 'Ilias', role: 'Administration Coordinator', action: 'Joined' },
      { date: 'Mar 30', name: 'gollumfish', role: 'Substitute', action: 'Joined' },
      { date: 'Mar 27', name: 'Jhon WEAKKK', role: 'Jungle', action: 'Joined' },
      { date: 'Mar 27', name: 'Kamazo', role: 'Toplaner', action: 'Joined' },
      { date: 'Mar 26', name: 'Dretas', role: 'Support', action: 'Joined' },
      { date: 'Mar 26', name: 'Touanité', role: 'ADC', action: 'Joined' },
      { date: 'Mar 25', name: 'DegeMic', role: 'ADC', action: 'Joined' },
      { date: 'Mar 25', name: 'Astrø', role: 'Jungle', action: 'Joined' },
      { date: 'Mar 25', name: 'Kayron', role: 'Support', action: 'Joined' },
      { date: 'Mar 25', name: 'Navy', role: 'Midlaner', action: 'Joined' },
      { date: 'Mar 25', name: 'Kaenic', role: 'Toplaner', action: 'Joined' },
    ];

    this.latestUpdates = updates;
  }

  selectBlog(blog: any) {
    this.selectedBlog = blog;
    this.titleService.setTitle(`${blog.title} | Jung Dogs Esports`);
    this.metaService.updateTag({ name: 'description', content: blog.summary });
  }

  clearSelectedBlog() {
    this.selectedBlog = null;
    this.updateMetaTags();
  }
}
