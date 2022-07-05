import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleImgBottomRightComponent } from './article-img-bottom-right.component';

describe('ArticleImgBottomRightComponent', () => {
  let component: ArticleImgBottomRightComponent;
  let fixture: ComponentFixture<ArticleImgBottomRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleImgBottomRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleImgBottomRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
