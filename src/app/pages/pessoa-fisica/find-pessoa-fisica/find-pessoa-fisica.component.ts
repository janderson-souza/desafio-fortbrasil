import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from 'src/app/core/services/pessoa.service';
import { Pessoa } from 'src/app/core/model/pessoa';
import { MatSnackBar } from '@angular/material';
import { Animacoes } from 'src/app/core/animations/animacoes';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-find-pessoa-fisica',
  templateUrl: './find-pessoa-fisica.component.html',
  styleUrls: ['./find-pessoa-fisica.component.scss'],
  animations: [
    Animacoes.CARD_ITEM
  ]

})
export class FindPessoaFisicaComponent implements OnInit {

  listaDePessoas: Pessoa[];
  form: FormGroup;

  constructor(
    private router: Router,
    private pessoaService: PessoaService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl(null),
      cpf: new FormControl(null),
      sexo: new FormControl(null),
    })
  }

  navegarParaFormulario() {
      this.router.navigateByUrl('form-pessoa-fisica');
  }

  consultar() {
    this.pessoaService.getPessoas(this.form.value).then((res: any[]) => {
      this.listaDePessoas = res;
      if(!res ||  res.length == 0) {
        this.snackBar.open('Nenhum resultado encontrado', 'OK', {
          duration: 3000
        });
      }
    });
  }

  atualizar(pessoa) {
    this.router.navigateByUrl('form-pessoa-fisica/' + pessoa.id)
  }

  limparCampos() {
    this.form.reset();
    this.listaDePessoas = [];
  }
}
