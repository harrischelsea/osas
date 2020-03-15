import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsAndRulesComponent } from './documents-and-rules.component';

describe('DocumentsAndRulesComponent', () => {
  let component: DocumentsAndRulesComponent;
  let fixture: ComponentFixture<DocumentsAndRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsAndRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsAndRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
