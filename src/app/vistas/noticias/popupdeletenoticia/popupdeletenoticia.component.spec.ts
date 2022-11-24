import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupdeletenoticiaComponent } from './popupdeletenoticia.component';

describe('PopupdeletenoticiaComponent', () => {
  let component: PopupdeletenoticiaComponent;
  let fixture: ComponentFixture<PopupdeletenoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupdeletenoticiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupdeletenoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
