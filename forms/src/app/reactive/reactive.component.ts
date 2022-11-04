import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  /**
   * Reactive Forms possui estruturas para representar o formulário dentro do TypeScript
   * 
   * FormControl representa um elemento de seu formulário
   */
  nome: FormControl = new FormControl('')
  email: FormControl = new FormControl('')
  senha: FormControl = new FormControl('')

  /* FormGroup é uma estrutura do Reactive Forms que permite agruparmos forms controls dentro dela, para que o acesso aos valores seja mais */

/*   dadosForm: FormGroup = new FormGroup({
    nome: new FormControl('', [ Validators.required, Validators.minLength(3),  ]),
    email: new FormControl('', [ Validators.email, Validators.required ]),
    senha: new FormControl(''),
    endereco: new FormGroup({
      rua: new FormControl(''),
      numero: new FormControl(''),
      cep: new FormControl('')
    })
  }) */

  /**
   * group é o método do FormBuilder responsável por criar um novo objeto do tipo FormGroup
   */

  /**
   * FormArray é utilizado para armazenar form controls, form groups ou outros form arrays
   * Ele sempre precisa estar dentro de um FormGroup
   */

  dadosForm: FormGroup = this.fb.group({
    nome: ['', [ Validators.required, Validators.minLength(3) ]],
    email: [''],
    senha: [''],
    endereco: this.fb.group({
      rua: [''],
      numero: [''],
      cep: ['']
    }),
    telefones: this.fb.array([
      ['']
    ])
  })

  /** Transformar o Abstract control -> FormArray */

  tels = this.dadosForm.get('telefones') as FormArray

  /**
   * Form Builder -> Objeto que permite criar FormControls, FormGroups ou FormArrays com uma sintaxe menor
   */

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  enviar() {
    /* A propriedade 'value' do formControl possui o valor que foi digitado dentro do campo do form */
    console.log(this.dadosForm.value)
  }

  addPhoneField() {
    this.tels.push(new FormControl(''))
  }

  deletePhoneField() {
    
  }

}
