import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlewareGraphComponent } from './middleware-graph.component';

describe('MiddlewareGraphComponent', () => {
  let component: MiddlewareGraphComponent;
  let fixture: ComponentFixture<MiddlewareGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddlewareGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddlewareGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
