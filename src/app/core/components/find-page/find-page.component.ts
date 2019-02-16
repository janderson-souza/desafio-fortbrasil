import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-find-page',
  templateUrl: './find-page.component.html',
  styleUrls: ['./find-page.component.scss']
})
export class FindPageComponent implements OnInit {

  @Input() icon = "error";
  @Input() titulo = "Titulo";
  @Input() labelBotaoNovo;

  @Output() clickNovo = new EventEmitter;
  @Output() clickLimpar = new EventEmitter;
  @Output() clickConsultar = new EventEmitter;
  
  constructor() { }

  ngOnInit() {
  }

  _clickNovo() {
    this.clickNovo.emit();
  }
  
  _clickLimpar() {
    this.clickLimpar.emit();
  }

  _clickConsultar() {
    this.clickConsultar.emit();
  }

}
