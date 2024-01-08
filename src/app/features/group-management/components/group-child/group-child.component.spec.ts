import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupChildComponent } from './group-child.component';

describe('GroupChildComponent', () => {
  let component: GroupChildComponent;
  let fixture: ComponentFixture<GroupChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupChildComponent]
    });
    fixture = TestBed.createComponent(GroupChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
