import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animacoes } from 'src/app/core/animations/animacoes';

@Component({
  selector: 'app-find-pessoa-fisica',
  templateUrl: './find-pessoa-fisica.component.html',
  styleUrls: ['./find-pessoa-fisica.component.scss'],
  animations: [
    Animacoes.ANIMACAO_DE_ENTRADA,
    Animacoes.ANIMACAO_DE_SAIDA,
  ]
})
export class FindPessoaFisicaComponent implements OnInit {

  animacaoDeSaida = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  iniciarAnimacaoDeTrocaDePagina() {
      this.animacaoDeSaida = true;
  }

  navegarParaFormulario($event) {
    if($event.totalTime > 0) {
      this.router.navigateByUrl('form-pessoa-fisica');
    }
  }
}
