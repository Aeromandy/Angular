import { Component, Input, OnInit } from '@angular/core';
import { CreditCard } from '../interfaces/CreditCard';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  /**
   * O angular vai entender que a propriedade 'dadosCartao'
   * poderá receber valores externos ao componente, ou seja,
   * eu estando em outro componente conseguirei mudar o valor
   * da propriedade 'dadosCartao'
   */

  @Input()
  dadosCartao: CreditCard = {
    nome: 'Antonio Silva',
    numero: '1234 5678 3456 7890',
    mes: '01',
    ano: '40',
    cvc: '123'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
