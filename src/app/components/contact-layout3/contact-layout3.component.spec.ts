import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLayout3Component } from './contact-layout3.component';

describe('ContactLayout3Component', () => {
  let component: ContactLayout3Component;
  let fixture: ComponentFixture<ContactLayout3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactLayout3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactLayout3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
