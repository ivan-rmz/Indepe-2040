import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsRegistroComponent } from './forms-registro.component';

describe('FormsRegistroComponent', () => {
  let component: FormsRegistroComponent;
  let fixture: ComponentFixture<FormsRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
