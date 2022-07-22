import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeCategoriesComponent } from './mange-categories.component';

describe('MangeCategoriesComponent', () => {
  let component: MangeCategoriesComponent;
  let fixture: ComponentFixture<MangeCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
