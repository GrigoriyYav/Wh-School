import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleImgTopLeftSingleHeaderComponent } from './article-img-top-left-single-header.component';

describe('ArticleImgTopLeftSingleHeaderComponent', () => {
  let component: ArticleImgTopLeftSingleHeaderComponent;
  let fixture: ComponentFixture<ArticleImgTopLeftSingleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleImgTopLeftSingleHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleImgTopLeftSingleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
