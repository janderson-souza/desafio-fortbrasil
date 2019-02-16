import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPessoaFisicaComponent } from './find-pessoa-fisica.component';

describe('FindPessoaFisicaComponent', () => {
  let component: FindPessoaFisicaComponent;
  let fixture: ComponentFixture<FindPessoaFisicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPessoaFisicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPessoaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
