import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartcomponentsComponent } from './startcomponents.component';

describe('StartcomponentsComponent', () => {
  let component: StartcomponentsComponent;
  let fixture: ComponentFixture<StartcomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartcomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
