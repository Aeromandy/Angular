import { Component } from '@angular/core';
import { CreditCard } from './interfaces/CreditCard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formCreditCard: CreditCard = {
    nome: '',
    numero: '',
    mes: '',
    ano: '',
    cvc: ''
  }
}
