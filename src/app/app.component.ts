import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from  './components/header/header.component' 
import {BlogComponent} from  './components/blog/blog.component'
import {FeaturesComponent} from  './components/features/features.component'
import {FooterComponent} from  './components/footer/footer.component'
import {HeroComponent} from  './components/hero/hero.component'
import {NewsletterComponent} from  './components/newsletter/newsletter.component'
import {ServicesComponent} from  './components/services/services.component'
import {TeamComponent} from  './components/team/team.component'
import {TestimonialsComponent} from  './components/testimonials/testimonials.component'
import {WhyChooseUsComponent} from  './components/why-choose-us/why-choose-us.component'
import {AboutComponent} from  './components/about/about.component'



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,BlogComponent,FeaturesComponent,FooterComponent,HeroComponent,NewsletterComponent,ServicesComponent,TeamComponent,TestimonialsComponent,WhyChooseUsComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'insurance-landing-page';
}
