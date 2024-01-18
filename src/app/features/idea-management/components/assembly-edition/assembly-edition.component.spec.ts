import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyEditionComponent } from './assembly-edition.component';

describe('AssemblyEditionComponent', () => {
  let component: AssemblyEditionComponent;
  let fixture: ComponentFixture<AssemblyEditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssemblyEditionComponent]
    });
    fixture = TestBed.createComponent(AssemblyEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
