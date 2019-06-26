import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabShopPage } from './tabShop.page';

describe('TabShopPage', () => {
  let component: TabShopPage;
  let fixture: ComponentFixture<TabShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabShopPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
