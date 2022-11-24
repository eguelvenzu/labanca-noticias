import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupeditnoticiaComponent } from './popupeditnoticia.component';

describe('PopupeditnoticiaComponent', () => {
  let component: PopupeditnoticiaComponent;
  let fixture: ComponentFixture<PopupeditnoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupeditnoticiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupeditnoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
