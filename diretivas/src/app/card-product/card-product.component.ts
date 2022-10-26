import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../interfaces/Produto';

@Component({
  selector: 'card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input()
  prod: Produto = {
    descricao: '',
    estoque: 0,
    imagem: '',
    nome: '',
    preco: 0
  }

  mostrarProduto: boolean = true

  @Output()
  deletar: EventEmitter<Produto> = new EventEmitter<Produto>()

  constructor() { }

  ngOnInit(): void {
  }

  esconderProduto() {
    this.mostrarProduto = false
  }

  aparecerProdNovamente(): void {
    this.mostrarProduto = true
  }

  emitirEventoDeletar(): void {
    this.deletar.emit(this.prod)
  }

}
