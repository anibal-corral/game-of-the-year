import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotheyearComponent } from './gotheyear.component';

describe('GotheyearComponent', () => {
  let component: GotheyearComponent;
  let fixture: ComponentFixture<GotheyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GotheyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GotheyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
