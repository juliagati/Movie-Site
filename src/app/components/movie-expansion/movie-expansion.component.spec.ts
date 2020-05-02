import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieExpansionComponent } from './movie-expansion.component';

describe('MovieExpansionComponent', () => {
  let component: MovieExpansionComponent;
  let fixture: ComponentFixture<MovieExpansionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieExpansionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
