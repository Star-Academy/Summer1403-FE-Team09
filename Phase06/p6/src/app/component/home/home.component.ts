import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { AsideComponent } from '../aside/aside.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent, AsideComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
