import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StcoksComponent } from './stcoks.component';

describe('StcoksComponent', () => {
  let component: StcoksComponent;
  let fixture: ComponentFixture<StcoksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StcoksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StcoksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
