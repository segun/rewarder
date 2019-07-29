import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRewardsComponent } from './view-rewards.component';

describe('ViewRewardsComponent', () => {
  let component: ViewRewardsComponent;
  let fixture: ComponentFixture<ViewRewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
