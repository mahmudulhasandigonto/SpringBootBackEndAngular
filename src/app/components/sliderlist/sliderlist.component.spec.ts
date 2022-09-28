import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderlistComponent } from './sliderlist.component';

describe('SliderlistComponent', () => {
  let component: SliderlistComponent;
  let fixture: ComponentFixture<SliderlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
