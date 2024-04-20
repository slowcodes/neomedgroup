import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerLayout5Component } from './banner-layout5.component';

describe('BannerLayout5Component', () => {
  let component: BannerLayout5Component;
  let fixture: ComponentFixture<BannerLayout5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerLayout5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerLayout5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
