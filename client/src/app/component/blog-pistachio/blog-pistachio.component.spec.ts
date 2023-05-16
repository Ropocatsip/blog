import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPistachioComponent } from './blog-pistachio.component';

describe('BlogPistachioComponent', () => {
  let component: BlogPistachioComponent;
  let fixture: ComponentFixture<BlogPistachioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPistachioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPistachioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
