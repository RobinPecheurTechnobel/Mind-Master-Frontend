import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyCreationComponent } from './assembly-creation.component';

describe('AssemblyCreationComponent', () => {
  let component: AssemblyCreationComponent;
  let fixture: ComponentFixture<AssemblyCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssemblyCreationComponent]
    });
    fixture = TestBed.createComponent(AssemblyCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
