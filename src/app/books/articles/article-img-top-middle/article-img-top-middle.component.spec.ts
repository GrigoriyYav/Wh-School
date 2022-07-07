import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleImgTopMiddleComponent } from './article-img-top-middle.component';

describe('ArticleImgTopMiddleComponent', () => {
  let component: ArticleImgTopMiddleComponent;
  let fixture: ComponentFixture<ArticleImgTopMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleImgTopMiddleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleImgTopMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
