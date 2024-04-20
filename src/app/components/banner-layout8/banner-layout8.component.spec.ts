import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerLayout8Component } from './banner-layout8.component';

describe('BannerLayout8Component', () => {
  let component: BannerLayout8Component;
  let fixture: ComponentFixture<BannerLayout8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerLayout8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerLayout8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
