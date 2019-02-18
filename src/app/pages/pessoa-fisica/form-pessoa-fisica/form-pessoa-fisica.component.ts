import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EstadoService } from 'src/app/core/services/estado.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PessoaService } from 'src/app/core/services/pessoa.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-form-pessoa-fisica',
  templateUrl: './form-pessoa-fisica.component.html',
  styleUrls: ['./form-pessoa-fisica.component.scss']
})
export class FormPessoaFisicaComponent implements OnInit {

  listaDeEstados: any[];
  listaDeCidades: any[];

  estadosFiltrados: Observable<any>
  cidadesFiltradas: Observable<string[]>
  
  form: FormGroup;

  id;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private estadoService: EstadoService,
    private pessoaService: PessoaService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.estadoService.pesquisar().subscribe(res => {
      this.listaDeEstados = res;
      this.estadosFiltrados = this.form.get('estado').valueChanges.pipe(
        startWith(''),
        map(value => this._filterEstados(value))
      );
    });

    this.form = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null, Validators.required),
      cpf: new FormControl(null, Validators.required),
      sexo: new FormControl(null, Validators.required),
      cep: new FormControl(null, Validators.required),
      estado: new FormControl(null, Validators.required),
      cidade: new FormControl(null, Validators.required),
      bairro: new FormControl(null, Validators.required),
      rua: new FormControl(null, Validators.required),
      numero: new FormControl(null, Validators.required),
      celular: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });

    this.route.params.subscribe(res => {
      if (res.id) {
        this.id = res.id;
        this.pessoaService.consultarPorId(this.id).subscribe(res => {
          console.log(res);
          if(res) {
            this.form.setValue(res);
          } else {
            this.id = null;
          }
        });
      }
    });
  }

  voltar() {
    this.router.navigateByUrl('find-pessoa-fisica')
  }

  salvar() {
    this.marcaComoTocado();
    if (this.form.valid) {
      this.form.disable();
      if (this.id) {
        this.pessoaService.atualizar(this.id, this.form.value).then(res => {
          this.snackBar.open('Pessoa atualizada com sucesso!', 'OK', {
            duration: 3000
          });
          this.voltar();
        });
      } else {
        this.pessoaService.salvar(this.form.value).then(res => {
          this.snackBar.open('Pessoa cadastrada com sucesso!', 'OK', {
            duration: 3000
          });
          this.voltar();
        });
      }
    }
  }

  marcaComoTocado() {
    this.form.get('nome').markAsTouched();
    this.form.get('cpf').markAsTouched();
    this.form.get('sexo').markAsTouched();
    this.form.get('cep').markAsTouched();
    this.form.get('estado').markAsTouched();
    this.form.get('cidade').markAsTouched();
    this.form.get('bairro').markAsTouched();
    this.form.get('rua').markAsTouched();
    this.form.get('numero').markAsTouched();
    this.form.get('celular').markAsTouched();
    this.form.get('email').markAsTouched();
  }

  private _filterEstados(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.listaDeEstados ? this.listaDeEstados.filter(estado => estado.nome.toLowerCase().indexOf(filterValue) === 0) : [];
  }

  private _filterCidades(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.listaDeCidades ? this.listaDeCidades.filter(cidade => cidade.toLowerCase().indexOf(filterValue) === 0) : [];
  }
  
  carregarListaDeCidades() {
    let estado = this.listaDeEstados.filter(estado => estado.nome == this.form.get('estado').value)[0];
    this.listaDeCidades = estado.cidades;
    this.form.get('cidade').enable();
    this.cidadesFiltradas = this.form.get('cidade').valueChanges.pipe(
      startWith(''),
      map(value => this._filterCidades(value))
    );
  }
  
  limparCidade() {
    if(this.form.get('cidade').enabled) {
      this.form.get('cidade').setValue(null);
      this.form.get('cidade').disable();
    }
  }
  
  getErrorMessage(fc: FormControl): string {
    return fc.hasError('required') ? 'Campo Obrigatório.' :
           fc.hasError('email') ? 'Email inválido.' :
           '';
  }


}
