import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animacoes } from '../../animations/animacoes';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  animations: [
    Animacoes.ANIMACAO_DE_ENTRADA,
    Animacoes.ANIMACAO_DE_SAIDA,
  ]
})
export class FormPageComponent implements OnInit {

  @Input() icon = "error";
  @Input() titulo = "Titulo";

  @Output() clickVoltar = new EventEmitter;
  @Output() clickSalvar = new EventEmitter;
  
  animacaoDeSaida = false;

  constructor() { }

  ngOnInit() {
  }

  iniciarAnimacaoDeTrocaDePagina() {
      this.animacaoDeSaida = true;
  }

  _clickVoltar($event) {
    if($event.totalTime > 0) {
      this.clickVoltar.emit();
    }
  }
  
  _clickSalvar() {
    this.clickSalvar.emit();
  }

}
