import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadorFormComponent } from './coordenador-form.component';

describe('CoordenadorFormComponent', () => {
  let component: CoordenadorFormComponent;
  let fixture: ComponentFixture<CoordenadorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordenadorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
