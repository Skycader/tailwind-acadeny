import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookCardComponent } from '../../components/book-card/book-card.component';
import { CardsGridComponent } from '../../components/cards-grid/cards-grid.component';

interface BookInterface {
  title: string;
  description: string;
  avatarSrc: string;
}

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, CardsGridComponent, BookCardComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  public availableBooks: BookInterface[] = [
    {
      title: 'One',
      description: 'One desc',
      avatarSrc: '',
    },
    {
      title: 'One',
      description: 'One desc',
      avatarSrc: '',
    },
    {
      title: 'One',
      description: 'One desc',
      avatarSrc: '',
    },
    {
      title: 'One',
      description: 'One desc',
      avatarSrc: '',
    },
    {
      title: 'One',
      description: 'One desc',
      avatarSrc: '',
    },
    {
      title: 'One',
      description: 'One desc',
      avatarSrc: '',
    },
  ];
}
