import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLayout4Component } from './service-layout4.component';

describe('ServiceLayout4Component', () => {
  let component: ServiceLayout4Component;
  let fixture: ComponentFixture<ServiceLayout4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceLayout4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceLayout4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
