import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-pessoa-fisica',
  templateUrl: './find-pessoa-fisica.component.html',
  styleUrls: ['./find-pessoa-fisica.component.scss']
})
export class FindPessoaFisicaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  novaPessoa() {
    this.router.navigateByUrl('form-pessoa-fisica');
  }
}
