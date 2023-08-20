/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditarTorreComponent } from './editar-torre.component';

describe('EditarTorreComponent', () => {
  let component: EditarTorreComponent;
  let fixture: ComponentFixture<EditarTorreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTorreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTorreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
