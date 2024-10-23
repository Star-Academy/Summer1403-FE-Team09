import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {BookComponent} from './book.component';
import {ActivatedRoute} from '@angular/router';
import {screen, render, fireEvent} from '@testing-library/angular';
import userEvent, {UserEvent} from '@testing-library/user-event';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let user: UserEvent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookComponent],
      providers: [{provide: ActivatedRoute, useValue: {params: {id: 1}}}],
    }).compileComponents();

    user = userEvent.setup();
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    component.book = {
      id: '1',
      name: 'test',
      image: 'test',
      genre: ['test'],
      author: 'test',
      publishData: '2020-01-01',
      price: 100,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should render elements in the template', () => {
    const element = fixture.nativeElement;
    const section = element.querySelector('section');
    const h2 = element.querySelector('h2');
    const h4 = element.querySelector('h4');
    const img = element.querySelector('img');
    const p = element.querySelector('p');
    const div = element.querySelectorAll('div') as NodeListOf<HTMLDivElement>;
    expect(section).withContext('Section must be created.').toBeTruthy();
    expect(h2).withContext('H2 must be created.').toBeTruthy();
    expect(h4).withContext('H4 must be created.').toBeTruthy();
    expect(img).withContext('Img must be created.').toBeTruthy();
    expect(p).withContext('P must be created.').toBeTruthy();
    expect(div.length).withContext('Div must be created.').toEqual(2);
  });

  it('Must render two buttons with values Delete and Edit', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
      expect(buttons[i].textContent)
        .withContext('Buttons must be created.')
        .toEqual(['Edit', 'Delete'][i]);
    }
  });

  it('Delete button should emit click event and must call deleteBook method', () => {
    render(BookComponent);
    const spy = spyOn(component, 'deleteBook');
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[buttons.length - 1]);
    expect(spy).toHaveBeenCalled();
  });

  it('Book must be rendered with red colored button.', async () => {
    render(BookComponent);
    const button = screen.getByText('Delete') as HTMLButtonElement;
    const style = getComputedStyle(button);
    expect(style.backgroundColor)
      .withContext('Color must be red unhovered.')
      .toEqual('rgb(138, 2, 2)');
  });
});
