import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forgottenpassword } from './forgottenpassword';

describe('Forgottenpassword', () => {
  let component: Forgottenpassword;
  let fixture: ComponentFixture<Forgottenpassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forgottenpassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forgottenpassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
