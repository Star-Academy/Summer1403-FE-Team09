import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditFormComponent } from './edit-form.component';
import { provideHttpClient } from '@angular/common/http';

describe('EditFormComponent', () => {
  let component: EditFormComponent;
  let fixture: ComponentFixture<EditFormComponent>;
  let htmlDom: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFormComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();
    fixture = TestBed.createComponent(EditFormComponent);
    component = fixture.componentInstance;
    htmlDom = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('it component SHOULD be created WHEN initial', () => {
    expect(component).toBeDefined();
  });
  
  it("form SHOULD be created WHEN initial", () => {
    expect(htmlDom.querySelector('form')).toBeDefined();
    expect(htmlDom.querySelector('form #name')).toBeDefined();
    expect(htmlDom.querySelector('form #image-url')).toBeDefined();
    expect(htmlDom.querySelector('form #genre')).toBeDefined();
    expect(htmlDom.querySelector('form #author')).toBeDefined();
    expect(htmlDom.querySelector('form #publishData')).toBeDefined();
    expect(htmlDom.querySelector('form #price')).toBeDefined();
    expect(htmlDom.querySelector('form button')).toBeDefined();
  });
});
