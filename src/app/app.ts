import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Nav } from './layout/nav/nav';
import { Header } from './layout/header/header';

@Component({
  imports: [RouterOutlet, Footer, Nav, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Pokedex');
}
