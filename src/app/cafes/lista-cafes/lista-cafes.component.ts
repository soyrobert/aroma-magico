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

  constructor(private cafeService: CafeService) { }

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe(data => {
      this.cafes = data;
    });
  }
}
