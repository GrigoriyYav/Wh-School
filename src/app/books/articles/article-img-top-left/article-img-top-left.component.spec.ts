import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleImgTopLeftComponent } from './article-img-top-left.component';

describe('ArticleImgTopLeftComponent', () => {
  let component: ArticleImgTopLeftComponent;
  let fixture: ComponentFixture<ArticleImgTopLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleImgTopLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleImgTopLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
