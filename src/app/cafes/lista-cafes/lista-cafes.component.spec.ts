import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListaCafesComponent } from './lista-cafes.component';
import { CafeService } from '../services/cafe.service';
import { of } from 'rxjs';

describe('ListaCafesComponent', () => {
  let component: ListaCafesComponent;
  let fixture: ComponentFixture<ListaCafesComponent>;
  let cafeService: CafeService;

  beforeEach(async () => {
    // Mock para CafeService
    const cafeServiceMock = {
      getCafes: jasmine.createSpy('getCafes').and.returnValue(of([
        { id: 1, nombre: 'Café 1', tipo: 'Café de Origen', region: 'Region 1' },
        { id: 2, nombre: 'Café 2', tipo: 'Blend', region: 'Region 2' },
        { id: 3, nombre: 'Café 3', tipo: 'Café de Origen', region: 'Region 3' },
      ]))
    };

    await TestBed.configureTestingModule({
      declarations: [ ListaCafesComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: CafeService, useValue: cafeServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCafesComponent);
    component = fixture.componentInstance;
    cafeService = TestBed.inject(CafeService);
    fixture.detectChanges();
  });

  it('debe crear', () => {
    expect(component).toBeTruthy();
  });

  it('tiene exactamente 3 cafés en la lista', () => {
    expect(component.cafes.length).toBe(3);
  });

  it('renderiza tres filas de cafés en la tabla', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('tr');
    expect(rows.length).toBe(4); // 3 cafés + 1 fila de encabezados
  });
});
