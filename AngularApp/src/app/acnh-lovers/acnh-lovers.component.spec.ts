import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcnhLoversComponent } from './acnh-lovers.component';

describe('AcnhLoversComponent', () => {
  let component: AcnhLoversComponent;
  let fixture: ComponentFixture<AcnhLoversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcnhLoversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcnhLoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
