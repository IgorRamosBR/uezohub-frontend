import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoTabelaComponent } from './conteudo-tabela.component';

describe('ConteudoTabelaComponent', () => {
  let component: ConteudoTabelaComponent;
  let fixture: ComponentFixture<ConteudoTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteudoTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
