import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSeaComponent } from './blog-sea.component';

describe('BlogSeaComponent', () => {
  let component: BlogSeaComponent;
  let fixture: ComponentFixture<BlogSeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
