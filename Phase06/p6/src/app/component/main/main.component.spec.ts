import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { ApiService } from '../../service/api.service';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { render, screen } from '@testing-library/angular';
import { of } from 'rxjs';

describe("main test", () => {

  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let spyApiService: jasmine.SpyObj<ApiService>;

  beforeEach(() => {

    const spy = jasmine.createSpyObj('ApiService', ['deleteBook', 'getBooks', 'subscribeBooks']);

    TestBed.configureTestingModule({
      imports: [MainComponent],
      providers: [provideHttpClient(), { provide: ActivatedRoute, useValue: { snapshot: { params: { id: "1" } } } }, { provide: ApiService, useValue: spy }],

    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    spyApiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    component = fixture.componentInstance;

    spyApiService.subscribeBooks.and.returnValue(of([{ genre: ["a", "s"], name: "name", author: "author", price: 100, id: "1", image: "image", publishData: "2000-01-01" }]));
    spyApiService.getBooks.and.returnValue();

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("render books list", () => {
    const book = fixture.debugElement.nativeElement.querySelector("app-book");
    expect(book).toBeTruthy();
  });

  it("delete book when click on delete button", () => {
    spyOn(component, "DeleteBook");
    render(MainComponent);

    const buttonDel = screen.getByText("Delete");
    buttonDel.click();

    expect(component.DeleteBook).toHaveBeenCalled();
  });
  
  it("when delete called. should ApiService delete function call", () => {
    render(MainComponent);    
    
    const buttonDel = screen.getByText("Delete");
    buttonDel.click();

    expect(spyApiService.deleteBook).toHaveBeenCalled();
  });
});