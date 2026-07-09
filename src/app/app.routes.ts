import { Routes } from '@angular/router';
import { OrgInfoComponent } from './components/org-info/org-info.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ContactComponent } from './components/contact/contact.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { SocialsComponent } from './components/socials/socials.component';
import { ShopComponent } from './components/shop/shop.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
  { path: '', component: OrgInfoComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'socials', component: SocialsComponent },
  // { path: 'shop', component: ShopComponent },
  // { path: 'checkout', component: CheckoutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
