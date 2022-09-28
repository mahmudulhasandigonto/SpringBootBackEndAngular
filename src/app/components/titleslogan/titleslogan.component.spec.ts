import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesloganComponent } from './titleslogan.component';

describe('TitlesloganComponent', () => {
  let component: TitlesloganComponent;
  let fixture: ComponentFixture<TitlesloganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlesloganComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlesloganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
