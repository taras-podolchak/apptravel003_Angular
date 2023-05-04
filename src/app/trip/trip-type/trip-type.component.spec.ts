import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TripTypeComponent} from './trip-type.component';

describe('TripTypeComponent', () => {
  let component: TripTypeComponent;
  let fixture: ComponentFixture<TripTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TripTypeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TripTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
