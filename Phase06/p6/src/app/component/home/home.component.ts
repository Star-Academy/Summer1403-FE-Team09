import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { AsideComponent } from '../aside/aside.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent, AsideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
