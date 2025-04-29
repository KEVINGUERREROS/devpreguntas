import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from 'src/app/components/footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule,FooterComponent],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  temas = [
    { nombre: 'HTML', progreso: 20 },
    { nombre: 'CSS', progreso: 40 },
    { nombre: 'JavaScript', progreso: 60 },
    { nombre: 'Angular', progreso: 10 },
    { nombre: 'Figma', progreso: 0 },
  ];

  constructor(private router: Router) {}

  irANiveles(tema: string) {
    this.router.navigate(['/quiz'], { queryParams: { tema } });
  }
}
