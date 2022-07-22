import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationErrorComponent } from './application-error.component';

describe('ApplicationErrorComponent', () => {
  let component: ApplicationErrorComponent;
  let fixture: ComponentFixture<ApplicationErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
