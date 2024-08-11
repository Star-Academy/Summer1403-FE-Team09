import {ComponentFixture, TestBed} from '@angular/core/testing';
import {EditFormComponent} from './edit-form.component';
import {provideHttpClient} from '@angular/common/http';
import {screen, render} from '@testing-library/angular';
import userEvent, {UserEvent} from '@testing-library/user-event';
import {ActivatedRoute} from '@angular/router';

describe('EditFormComponent', () => {
  let component: EditFormComponent;
  let fixture: ComponentFixture<EditFormComponent>;
  let user: UserEvent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFormComponent],
      providers: [
        provideHttpClient(),
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {params: {id: 1}}},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditFormComponent);
    user = userEvent.setup();
    component = fixture.componentInstance;
    spyOn(component, 'close');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should render the form', () => {
    const element = fixture.nativeElement;
    const form = element.querySelector('form');
    expect(form).toBeTruthy();
  });

  it('the button should be disabled when the form is empty', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBeTrue();
  });

  it('the button should be enabled when the form is not empty', async () => {
    render(EditFormComponent);
    const nameInput = screen.getByLabelText('Name:') as HTMLInputElement;
    await user.type(nameInput, 'test');
    const imageUrl = screen.getByLabelText('Image URL:') as HTMLInputElement;
    await user.type(imageUrl, 'test');
    const genre = screen.getByLabelText('Genre:') as HTMLInputElement;
    await user.type(genre, 'test');
    const author = screen.getByLabelText('Author:') as HTMLInputElement;
    await user.type(author, 'test');
    const publishData = screen.getByLabelText(
      'publish Data:'
    ) as HTMLInputElement;
    await user.type(publishData, '2020-01-01');
    const price = screen.getByLabelText('Price:') as HTMLInputElement;
    await user.type(price, '10');
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector(
      'button'
    ) as HTMLButtonElement;
    expect(button.disabled).toBeFalse();
  });

  it('The form should be closed when the close button is clicked.', () => {
    render(EditFormComponent);
    const close = fixture.nativeElement.querySelector('#close');
    close.click();
    expect(component.close).toHaveBeenCalled();
  });
});
