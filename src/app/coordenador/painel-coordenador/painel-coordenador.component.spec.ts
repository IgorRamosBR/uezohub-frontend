import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelCoordenadorComponent } from './painel-coordenador.component';

describe('PainelCoordenadorComponent', () => {
  let component: PainelCoordenadorComponent;
  let fixture: ComponentFixture<PainelCoordenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelCoordenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelCoordenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
