import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLayout2Component } from './about-layout2.component';

describe('AboutLayout2Component', () => {
  let component: AboutLayout2Component;
  let fixture: ComponentFixture<AboutLayout2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutLayout2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutLayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
