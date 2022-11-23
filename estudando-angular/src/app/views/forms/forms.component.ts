import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      nome: [""],
      cor: [""],
      preco: [""]
    });
   }

  public hero: any = {
    nome: "",
    idade: NaN,
    poder: ""
  }

}
