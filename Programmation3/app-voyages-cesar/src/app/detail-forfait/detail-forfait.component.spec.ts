import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailForfaitComponent } from './detail-forfait.component';

describe('DetailForfaitComponent', () => {
  let component: DetailForfaitComponent;
  let fixture: ComponentFixture<DetailForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
