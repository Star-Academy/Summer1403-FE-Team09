import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsideComponent } from './aside.component';
import { provideHttpClient } from '@angular/common/http';
import { ApiService } from '../../service/api.service';
import { render, screen } from '@testing-library/angular';
import userEvent, { UserEvent } from '@testing-library/user-event';

describe('AsideComponent', () => {
  let component: AsideComponent;
  let fixture: ComponentFixture<AsideComponent>;
  let serviceSpy: jasmine.SpyObj<ApiService>;
  let user: UserEvent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    serviceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    fixture = TestBed.createComponent(AsideComponent);
    component = fixture.componentInstance;
    user = userEvent.setup();
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

  it('should have a title for the form that is Add New Book', () => {
    const element = fixture.nativeElement;
    const title = element.querySelector('p');
    expect(title.textContent).toContain('Add New Book');
  });

  it('the button should be disabled when the form is empty', () => {
    render(AsideComponent);
    const nameInput = screen.getByLabelText('Name:') as HTMLInputElement;
    expect(nameInput.textContent).withContext('Name input should be empty').toBe('');
    const button = screen.getByText('Add Book', { exact: true }) as HTMLButtonElement;
    expect(button.attributes.getNamedItem('disabled')).withContext('Button should be disabled').toBeTruthy();
  });

  it('the button should be enabled when the form is not empty', async () => {
    render(AsideComponent);
    const nameInput = screen.getByLabelText('Name:') as HTMLInputElement;
    await user.type(nameInput, 'test');
    const imageUrl = screen.getByLabelText('Image URL:') as HTMLInputElement;
    await user.type(imageUrl, 'test');
    const genre = screen.getByLabelText('Genre:') as HTMLInputElement;
    await user.type(genre, 'test');
    const author = screen.getByLabelText('Author:') as HTMLInputElement;
    await user.type(author, 'test');
    const publishData = screen.getByLabelText('publish Data:') as HTMLInputElement;
    await user.type(publishData, '2020-01-01');
    const price = screen.getByLabelText('Price:') as HTMLInputElement;
    await user.type(price, '10');
    fixture.detectChanges();
    const button = screen.getByText('Add Book', { exact: true }) as HTMLButtonElement;
    expect(button.attributes.getNamedItem('disabled')).withContext('Button should be enabled').toEqual(null);
  });
});
