import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkerSearchDialogComponent } from './thinker-search-dialog.component';

describe('ThinkerSearchDialogComponent', () => {
  let component: ThinkerSearchDialogComponent;
  let fixture: ComponentFixture<ThinkerSearchDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThinkerSearchDialogComponent]
    });
    fixture = TestBed.createComponent(ThinkerSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
