import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let footerTag: HTMLElement;
  let pTag: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    footerTag = fixture.debugElement.query(By.css('footer')).nativeElement;
    pTag = fixture.debugElement.query(By.css('footer')).nativeElement;
  });

  it('component should be created when initial', () => {
    fixture.detectChanges();
    expect(component).withContext('component create').toBeTruthy();
  });

  it('footer tag should be created when initial', () => {
    fixture.detectChanges();
    expect(footerTag).withContext('footer tag create').toBeTruthy();
  });

  it('p tag should be created when initial', () => {
    fixture.detectChanges();
    expect(pTag).withContext('p tag create').toBeTruthy();
  });

  it('p tag have height 60px should be created when initial', () => {
    let styles = window.getComputedStyle(pTag);
    fixture.detectChanges();
    expect(styles.height).toEqual('60px');
  });
});
