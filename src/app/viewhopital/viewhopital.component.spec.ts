import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhopitalComponent } from './viewhopital.component';

describe('ViewhopitalComponent', () => {
  let component: ViewhopitalComponent;
  let fixture: ComponentFixture<ViewhopitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewhopitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhopitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
