import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricularInicioComponent } from './matricular-inicio.component';

describe('MatricularInicioComponent', () => {
  let component: MatricularInicioComponent;
  let fixture: ComponentFixture<MatricularInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatricularInicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatricularInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
