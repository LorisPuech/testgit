import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  title = 'Tour of heroes';
}

export class Hero{
  id: number;
  name: string;
}