import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsuivieComponent } from './viewsuivie.component';

describe('ViewsuivieComponent', () => {
  let component: ViewsuivieComponent;
  let fixture: ComponentFixture<ViewsuivieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsuivieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsuivieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
