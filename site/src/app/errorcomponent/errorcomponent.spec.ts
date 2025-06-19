import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Errorcomponent } from './errorcomponent';

describe('Errorcomponent', () => {
  let component: Errorcomponent;
  let fixture: ComponentFixture<Errorcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Errorcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Errorcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
