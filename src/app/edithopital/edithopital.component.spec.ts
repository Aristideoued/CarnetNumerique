import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithopitalComponent } from './edithopital.component';

describe('EdithopitalComponent', () => {
  let component: EdithopitalComponent;
  let fixture: ComponentFixture<EdithopitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdithopitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdithopitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
