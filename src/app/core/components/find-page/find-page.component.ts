import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animacoes } from '../../animations/animacoes';

@Component({
  selector: 'app-find-page',
  templateUrl: './find-page.component.html',
  styleUrls: ['./find-page.component.scss'],
  animations: [
    Animacoes.ANIMACAO_DE_ENTRADA,
    Animacoes.ANIMACAO_DE_SAIDA,
  ]
})
export class FindPageComponent implements OnInit {

  @Input() icon = "error";
  @Input() titulo = "Titulo";
  @Input() labelBotaoNovo;

  @Output() clickNovo = new EventEmitter;
  @Output() clickLimpar = new EventEmitter;
  @Output() clickConsultar = new EventEmitter;
  
  animacaoDeSaida = false;

  constructor() { }

  ngOnInit() {
  }

  iniciarAnimacaoDeTrocaDePagina() {
      this.animacaoDeSaida = true;
  }

  _clickNovo($event) {
    if($event.totalTime > 0) {
      this.clickNovo.emit();
    }
  }
  
  _clickLimpar() {
    this.clickLimpar.emit();
  }

  _clickConsultar() {
    this.clickConsultar.emit();
  }

}
