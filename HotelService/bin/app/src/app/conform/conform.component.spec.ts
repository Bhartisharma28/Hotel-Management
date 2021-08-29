import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformComponent } from './conform.component';

describe('ConformComponent', () => {
  let component: ConformComponent;
  let fixture: ComponentFixture<ConformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
