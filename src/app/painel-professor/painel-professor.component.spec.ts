import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelProfessorComponent } from './painel-professor.component';

describe('PainelProfessorComponent', () => {
  let component: PainelProfessorComponent;
  let fixture: ComponentFixture<PainelProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
