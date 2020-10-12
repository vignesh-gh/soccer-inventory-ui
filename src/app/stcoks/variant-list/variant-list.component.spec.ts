import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantListComponent } from './variant-list.component';

describe('VariantListComponent', () => {
  let component: VariantListComponent;
  let fixture: ComponentFixture<VariantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
