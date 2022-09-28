import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideraddComponent } from './slideradd.component';

describe('SlideraddComponent', () => {
  let component: SlideraddComponent;
  let fixture: ComponentFixture<SlideraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideraddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
