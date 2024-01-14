import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkerEditionComponent } from './thinker-edition.component';

describe('ThinkerEditionComponent', () => {
  let component: ThinkerEditionComponent;
  let fixture: ComponentFixture<ThinkerEditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThinkerEditionComponent]
    });
    fixture = TestBed.createComponent(ThinkerEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
