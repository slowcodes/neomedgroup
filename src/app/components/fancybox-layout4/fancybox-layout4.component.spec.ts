import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyboxLayout4Component } from './fancybox-layout4.component';

describe('FancyboxLayout4Component', () => {
  let component: FancyboxLayout4Component;
  let fixture: ComponentFixture<FancyboxLayout4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FancyboxLayout4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FancyboxLayout4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
