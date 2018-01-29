import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoUploadFormComponent } from './conteudo-upload-form.component';

describe('ConteudoUploadFormComponent', () => {
  let component: ConteudoUploadFormComponent;
  let fixture: ComponentFixture<ConteudoUploadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteudoUploadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoUploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
