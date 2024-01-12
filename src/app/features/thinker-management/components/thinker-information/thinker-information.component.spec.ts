import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkerInformationComponent } from './thinker-information.component';

describe('ThinkerInformationComponent', () => {
  let component: ThinkerInformationComponent;
  let fixture: ComponentFixture<ThinkerInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThinkerInformationComponent]
    });
    fixture = TestBed.createComponent(ThinkerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
