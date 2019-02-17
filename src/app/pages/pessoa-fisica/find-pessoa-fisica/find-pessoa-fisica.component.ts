import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from 'src/app/core/services/pessoa.service';

@Component({
  selector: 'app-find-pessoa-fisica',
  templateUrl: './find-pessoa-fisica.component.html',
  styleUrls: ['./find-pessoa-fisica.component.scss'],

})
export class FindPessoaFisicaComponent implements OnInit {


  constructor(
    private router: Router,
    private pessoaService: PessoaService
  ) { }

  ngOnInit() {
  }

  navegarParaFormulario() {
      this.router.navigateByUrl('form-pessoa-fisica');
  }

  consultar() {
    this.pessoaService.getPessoas().then(res => {
      console.log(res);
    });
  }
}
