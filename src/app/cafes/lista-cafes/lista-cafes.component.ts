import { Component, OnInit } from '@angular/core';
import { CafeService } from '../services/cafe.service';
import { Cafe } from '../models/cafe';

@Component({
  selector: 'app-lista-cafes',
  templateUrl: './lista-cafes.component.html',
  styleUrls: ['./lista-cafes.component.scss']
})
export class ListaCafesComponent implements OnInit {
  cafes: Cafe[] = [];
  totalCafeDeOrigen: number = 0;
  totalCafeBlend: number = 0;

  constructor(private cafeService: CafeService) { }

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe(data => {
      this.cafes = data;
      this.calculateCafesByType();
    });
  }

  calculateCafesByType(): void {
    this.totalCafeDeOrigen = this.cafes.filter(cafe => cafe.tipo === 'Café de Origen').length;
    this.totalCafeBlend = this.cafes.filter(cafe => cafe.tipo === 'Blend').length;
  }
}
