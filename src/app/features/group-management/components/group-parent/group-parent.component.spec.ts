import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupParentComponent } from './group-parent.component';

describe('GroupParentComponent', () => {
  let component: GroupParentComponent;
  let fixture: ComponentFixture<GroupParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupParentComponent]
    });
    fixture = TestBed.createComponent(GroupParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
