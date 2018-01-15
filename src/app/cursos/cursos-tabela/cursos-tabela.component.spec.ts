import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosTabelaComponent } from './cursos-tabela.component';

describe('CursosTabelaComponent', () => {
  let component: CursosTabelaComponent;
  let fixture: ComponentFixture<CursosTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
