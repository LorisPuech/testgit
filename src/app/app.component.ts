import { Component } from '@angular/core';
import { Hero }      from './hero.component';
import { HeroService } from './hero.service';
import { OnInit }   from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  title = 'Tour of heroes';

  ngOnInit(): void{ 
    this.getHeroes();
  }
  constructor(private heroService: HeroService){}

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes= heroes);
  }
}