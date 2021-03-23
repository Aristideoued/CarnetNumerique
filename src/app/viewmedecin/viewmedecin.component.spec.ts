import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmedecinComponent } from './viewmedecin.component';

describe('ViewmedecinComponent', () => {
  let component: ViewmedecinComponent;
  let fixture: ComponentFixture<ViewmedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
