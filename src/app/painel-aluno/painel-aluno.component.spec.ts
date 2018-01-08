import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelAlunoComponent } from './painel-aluno.component';

describe('PainelAlunoComponent', () => {
  let component: PainelAlunoComponent;
  let fixture: ComponentFixture<PainelAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
