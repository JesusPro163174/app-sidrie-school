import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivesPage } from './actives.page';

describe('ActivesPage', () => {
  let component: ActivesPage;
  let fixture: ComponentFixture<ActivesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
