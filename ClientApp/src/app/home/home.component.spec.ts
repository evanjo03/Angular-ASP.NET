import { HomeComponent } from './home.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CommonModule} from '@angular/common';

fdescribe('figuring out how testing works', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      providers: [],
      declarations: [HomeComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })

  describe('add', function() {
    it('should log the result', () => {
      spyOn(console, 'log').and.callThrough();
      spyOn(component, 'add').and.callThrough();

      let final = component.add(4, 5);
      expect(component.add).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalled();
      expect(final).toBe(9);
    });

  });
});


