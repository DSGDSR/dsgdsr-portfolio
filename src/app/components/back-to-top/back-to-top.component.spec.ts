import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackToTopComponent } from './back-to-top.component';
import { TranslateModule } from '@ngx-translate/core';

describe('BackToTopComponent', () => {
  let fixture: ComponentFixture<BackToTopComponent>;
  let component: BackToTopComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BackToTopComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call scrollTo() when scroll clicked', () => {
    const spyVhToPixels = spyOn<any>(component, 'vhToPixels');
    const spyScrollTo = spyOn<any>(component, 'scrollTo');
    component.scroll();

    expect(spyVhToPixels).toHaveBeenCalledWith(component['homeOffsetScroll']);
    expect(spyScrollTo).toHaveBeenCalled();

    component.isAtTop = false;
    fixture.detectChanges();
    component.scroll();

    expect(spyScrollTo).toHaveBeenCalledWith(0);
  });

  it('should call window.scroll() when scrollTo called', () => {
    const spyWindowScroll = spyOn<any>(window, 'scrollTo');
    const scrollOffset = 100;
    component['scrollTo'](scrollOffset);

    expect(spyWindowScroll).toHaveBeenCalledWith({
      left: document.body.scrollWidth,
      top: scrollOffset,
      behavior: 'smooth',
    });
  });

  it('should convert vh height to pixels', () => {
    const spyVhToPixels = spyOn<any>(component, 'vhToPixels');
    component['scroll']();

    expect(spyVhToPixels).toHaveBeenCalledWith(component['homeOffsetScroll']);
  });
});
