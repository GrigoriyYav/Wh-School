import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleImgBottomRightSingleHeaderComponent } from './article-img-bottom-right-single-header.component';

describe('ArticleImgBottomRightSingleHeaderComponent', () => {
  let component: ArticleImgBottomRightSingleHeaderComponent;
  let fixture: ComponentFixture<ArticleImgBottomRightSingleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleImgBottomRightSingleHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleImgBottomRightSingleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
