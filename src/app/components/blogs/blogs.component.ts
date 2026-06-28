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
      title: 'Introducing Team Freyja!',
      date: 'June 29, 2026',
      summary: 'We are proud to announce the formation of Team Freyja, our new dedicated Women and Non-Binary (WNB) roster.',
      content: 'Jung Dogs Esports is committed to fostering an inclusive and diverse competitive environment. Today, we are excited to officially introduce <strong>Team Freyja</strong>, our new WNB roster. We believe in providing a platform for all talented players to shine, and Freyja marks a significant step in our mission to expand our presence across all levels of competitive play. <br><br> We are currently in the process of building this new legacy, with <strong>tryouts ongoing</strong> for all main positions. We are looking for dedicated, skilled, and passionate players who want to grow with the pack. If you are interested in joining Team Freyja, keep an eye on our Discord for tryout schedules and application details!',
      author: 'Management'
    },
    {
      title: 'Announcing the Jung Dogs Cup!',
      date: 'June 28, 2026',
      summary: 'Get ready for our next major tournament! The Jung Dogs Cup is coming this August with high-stakes action on the Rift.',
      content: 'We are thrilled to announce our next official League of Legends tournament: the <strong>Jung Dogs Cup</strong>! Mark your calendars for <strong>August 8th, 2026</strong>. This is your chance to prove your skills, compete against top-tier talent, and show the strength of your pack. Registration is now open on Challengermode. Don\'t miss out on this opportunity to outplay the competition! <br><br> Register here: <a href="https://www.challengermode.com/tournaments/d3e09f4b-b169-43a2-a165-08decf4ad291?UTM_Campaign=SharedTournament" target="_blank">Jung Dogs Cup Registration</a>',
      author: 'Management'
    },
    {
      title: 'Socials Section is Live!',
      date: 'June 26, 2026',
      summary: 'We now have a dedicated socials section where you can find and follow our streamers and members.',
      content: 'We are excited to announce that Jung Dogs Esports now has a dedicated Socials section on our website! You can now easily find and follow your favorite Jung Dogs streamers and members across various platforms like Twitch and X. Check it out to see who\'s live and support the pack!',
      author: 'Management'
    },
    {
      title: 'Community Highlight: Meccha Chameleon Game Night!',
      date: 'June 17, 2026',
      summary: 'Our recent community game night was a massive success with a full lobby of teammates!',
      content: 'Yesterday\'s game night was an absolute blast! We had a full lobby of teammates joining in for some high-energy rounds of Meccha Chameleon. It was great to see everyone coming together, showing off their skills (and some hilarious fails), and just having a fantastic time outside of the usual competitive Rift matches. These moments of camaraderie are what make Jung Dogs Esports more than just a team. Thanks to everyone who participated and made it such a memorable night!',
      author: 'Management'
    },
    {
      title: 'Jung Dogs Trials: Tournament Results!',
      date: 'June 5, 2026',
      summary: 'The results are in for the Jung Dogs Trials! Congratulations to our winners.',
      content: 'We are excited to share the results of the recently concluded Jung Dogs Trials tournament. It was a day of intense competition and high-level play on the Rift. After several hard-fought matches, the final standings are: <strong>1st Place: Estrelic</strong>, <strong>2nd Place: Quintet of Legends</strong>, and <strong>3rd Place: Vyre</strong>. We want to thank all teams who participated and made this event a success. Stay tuned for more tournaments coming soon!',
      author: 'Management'
    },
    {
      title: 'Fuel Your Game: Partnering with DUBBY',
      date: 'June 3, 2026',
      summary: 'We are thrilled to announce our official partnership with DUBBY Energy!',
      content: 'Jung Dogs Esports is excited to partner with DUBBY Energy to keep our players focused and energized during those intense matches on the Rift. DUBBY offers clean energy for gamers without the crash. Use our official discount code <strong>JUNGDOGSESPORTS</strong> at checkout for a special discount! Check out their full range at <a href="https://www.dubby.gg/discount/JUNGDOGSESPORTS?ref=xhoognfp" target="_blank">dubby.gg</a> and join the energy revolution with the pack.',
      author: 'Management'
    },
    {
      title: 'New Partners: BotDiff Coaching',
      date: 'June 1, 2026',
      summary: 'We are excited to announce our partnership with BotDiff Coaching, led by KrayonBlaDe and Degemic!',
      content: 'Jung Dogs Esports is proud to welcome KrayonBlaDe and Degemic as our official coaching partners. Through their platform, <a href="https://botdiffcoaching.com" target="_blank">botdiffcoaching.com</a>, they provide professional coaching services to help players master the Rift. This partnership marks a significant step in our commitment to player development and improvement.',
      author: 'Management'
    },
    {
      title: 'Molotov Roster Complete!',
      date: 'May 31, 2026',
      summary: 'Our UK League team, Molotov, is now fully rostered and ready for action!',
      content: 'We are thrilled to announce that our UK team, Molotov, has officially finalized its roster. After an intensive scouting and tryout period, we have assembled a solid lineup: Kamazo in the Top lane, Robert123 in the Jungle, and Hisoka as ADC. This talented group of players is already hard at work in scrims, preparing to represent Jung Dogs Esports in the UK League. We are confident in their potential and can\'t wait to see them compete!',
      author: 'Management'
    },
    {
      title: 'Submit Your Highlights!',
      date: 'May 23, 2026',
      summary: 'We are now accepting community clips to be featured on our homepage!',
      content: 'Do you have an insane outplay or a clutch moment you want to share? Jung Dogs Esports is now accepting clip submissions from our community! You can send your best highlights to our official email or share them in our Discord server. Selected clips will be featured right here on our homepage in the Organisation Clips section. We can\'t wait to see what you\'ve got!',
      author: 'Management'
    },
    {
      title: 'Jung Dogs Esports is now on X!',
      date: 'May 17, 2026',
      summary: 'Follow us on X (formerly Twitter) for the latest updates and news!',
      content: 'We are excited to announce that Jung Dogs Esports has officially joined X! Follow us at <a href="https://x.com/JungDogsEsports" target="_blank">https://x.com/JungDogsEsports</a> to stay up to date with our latest news, match results, and more. Your support means everything to us as we continue to grow our community!',
      author: 'Management'
    },
    {
      title: 'Expanding Our Reach: Prime League and UK League',
      date: 'May 16, 2026',
      summary: 'Jung Dogs Esports is proud to announce our entry into the Prime League and UK League with teams DEV and Molotov.',
      content: 'As part of our commitment to competitive growth, we are thrilled to announce that team DEV will be representing us in the Prime League, while team Molotov will be competing in the UK League. This expansion marks a significant milestone for Jung Dogs Esports as we continue to establish our presence in major regional leagues across Europe. We are currently finalizing our rosters and look forward to showing what our teams can do on the big stage!',
      author: 'Management'
    },
    {
      title: 'Welcome to Jung Dogs Esports',
      date: 'April 20, 2026',
      summary: 'Exciting news as we officially launch our new organizational website and team rosters!',
      content: 'We are thrilled to announce the official launch of Jung Dogs Esports! Our new website serves as a hub for all our tournament information, blog updates, and community engagement. We have been working hard behind the scenes to assemble competitive rosters for League of Legends and other competitive titles. Stay tuned for more updates as we continue to grow and compete across the Rift.',
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
      { date: 'Jun 28', name: 'Team Freyja', role: 'WNB Team', action: 'Announced' },
      { date: 'Jun 28', name: 'Jung Dogs Cup', role: 'Tournament', action: 'Announced' },
      { date: 'Jun 28', name: 'Knockerrz', role: 'Support', action: 'Joined' },
      { date: 'Jun 26', name: 'SynLynx', role: 'Support', action: 'Joined' },
      { date: 'Jun 26', name: 'RD', role: 'Jungle', action: 'Joined' },
      { date: 'Jun 26', name: 'Zorka XL', role: 'Midlaner', action: 'Joined' },
      { date: 'Jun 26', name: 'Paardje', role: 'Toplaner', action: 'Joined' },
      { date: 'Jun 26', name: 'Robert123', role: 'Jungle', action: 'Left' },
      { date: 'Jun 18', name: 'Maxers', role: 'ADC', action: 'Joined' },
      { date: 'Jun 9', name: 'Dretas', role: 'Coach', action: 'Promoted' },
      { type: 'tournament', date: 'Jun 5', name: 'Estrelic | Jung Dogs Trials', role: 'Jung Dogs Trials', action: '1st place' },
      { type: 'tournament', date: 'Jun 5', name: 'Vyre | Jung Dogs Trials', role: 'Jung Dogs Trials', action: '3rd place' },
      { date: 'May 28', name: 'Hisoka', role: 'ADC ', action: 'Joined' },
      { date: 'May 26', name: 'Robert123', role: 'Jungle ', action: 'Joined' },
      { date: 'May 9', name: 'Ihwa', role: 'Substitute', action: 'Joined' },
      { date: 'May 14', name: 'Tilko185', role: 'Substitute', action: 'Joined' },
      { date: 'May 9', name: 'Esat', role: 'Substitute', action: 'Joined' },
      { date: 'May 3', name: 'Brunooo', role: 'Jungle', action: 'Left' },
      { date: 'May 3', name: 'Tarquin', role: 'Support', action: 'Left' },
      { type: 'tournament', date: 'May 2', name: 'Vyre | Benelux Ascend Series', role: 'Open Qualifier 3', action: 'DNF' },
      { date: 'Apr 28', name: 'Toxic', role: 'Analyst', action: 'Joined' },
      { date: 'Apr 25', name: 'tilko185', role: 'Substitute', action: 'Joined' },
      { date: 'Apr 25', name: 'Save3rs', role: 'Coach', action: 'Joined' },
      { date: 'Apr 23', name: 'Kasumi', role: 'Substitute', action: 'Joined' },
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
      { date: 'Mar 27', name: 'Kamazo', role: 'Toplaner', action: 'Joined' },
      { date: 'Mar 26', name: 'Dretas', role: 'Junior Staff', action: 'Joined' },
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
