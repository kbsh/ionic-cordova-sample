import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMyStorePage } from './tabMyStore.page';

describe('TabMyStorePage', () => {
  let component: TabMyStorePage;
  let fixture: ComponentFixture<TabMyStorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabMyStorePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMyStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
