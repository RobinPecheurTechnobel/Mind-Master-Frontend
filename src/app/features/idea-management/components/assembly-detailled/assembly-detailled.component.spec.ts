import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyDetailledComponent } from './assembly-detailled.component';

describe('AssemblyDetailledComponent', () => {
  let component: AssemblyDetailledComponent;
  let fixture: ComponentFixture<AssemblyDetailledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssemblyDetailledComponent]
    });
    fixture = TestBed.createComponent(AssemblyDetailledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
