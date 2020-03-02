import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsListComponent } from './informations-list.component';

describe('InformationsListComponent', () => {
  let component: InformationsListComponent;
  let fixture: ComponentFixture<InformationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
