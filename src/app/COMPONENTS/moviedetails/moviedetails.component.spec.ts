import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MOVIEDETAILSComponent } from './moviedetails.component';

describe('MOVIEDETAILSComponent', () => {
  let component: MOVIEDETAILSComponent;
  let fixture: ComponentFixture<MOVIEDETAILSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MOVIEDETAILSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MOVIEDETAILSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
