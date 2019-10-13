import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRestaurantesPage } from './lista-restaurantes.page';

describe('ListaRestaurantesPage', () => {
  let component: ListaRestaurantesPage;
  let fixture: ComponentFixture<ListaRestaurantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRestaurantesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRestaurantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
