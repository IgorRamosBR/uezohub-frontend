import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFotoDialogComponent } from './upload-foto-dialog.component';

describe('UploadFotoDialogComponent', () => {
  let component: UploadFotoDialogComponent;
  let fixture: ComponentFixture<UploadFotoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFotoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFotoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
