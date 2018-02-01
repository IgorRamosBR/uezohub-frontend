import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaCursoComponent } from './escolha-curso.component';

describe('EscolhaCursoComponent', () => {
  let component: EscolhaCursoComponent;
  let fixture: ComponentFixture<EscolhaCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolhaCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
