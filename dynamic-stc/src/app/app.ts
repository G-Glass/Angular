import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Titulo } from './titulo/titulo';
import { Menu } from './menu/menu';
import { Conteudo } from './conteudo/conteudo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Titulo,Menu,Conteudo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dynamic-stc');
}
