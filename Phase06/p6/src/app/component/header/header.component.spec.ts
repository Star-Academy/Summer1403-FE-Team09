import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderComponent} from './header.component';
import {By} from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let headerTag: HTMLElement;
  let pTag: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    headerTag = fixture.debugElement.query(By.css('header')).nativeElement;
    pTag = fixture.debugElement.query(By.css('header p')).nativeElement;
  });

  it('component should be created when initial', () => {
    fixture.detectChanges();
    expect(component).withContext('component create').toBeTruthy();
  });

  it('header tag should be created when initial', () => {
    fixture.detectChanges();
    expect(headerTag).withContext('header tag create').toBeTruthy();
  });

  it('p tag should be created when initial', () => {
    fixture.detectChanges();
    expect(pTag).withContext('p tag create').toBeTruthy();
  });

  it('header tag have background color #999 should be created when initial', () => {
    let styles = window.getComputedStyle(headerTag);
    fixture.detectChanges();
    expect(styles.backgroundColor).toEqual('rgb(153, 153, 153)');
  });
});
