import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SaveTripComponent} from './save-trip.component';

describe('SaveTripComponent', () => {
  let component: SaveTripComponent;
  let fixture: ComponentFixture<SaveTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveTripComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SaveTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
