import { Component } from '@angular/core';
import { Produto } from './interfaces/Produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';
  /* p: Produto = {
    nome: 'Xbox',
    descricao: 'Console da Microsoft', 
    estoque: 150,
    preco: 4000,
    imagem: 'https://images.kabum.com.br/produtos/fotos/128561/console-microsoft-xbox-series-s-500gb-branco-rrs-00006_1601067301_original.jpg'

  } */
  nome: string = ''
  imagem: string = ''
  preco: number = 0
  estoque: number = 0
  descricao: string = ''

  produtos: Produto[] = []

  addProduto(evento: any): void {
    console.log(evento)
    evento.preventDefault() /* faz com que o comportamento padrão de um elemento HTML seja anulado */
    evento.stopPropagation() /* evita com que a emissão do evento afete outros elementos HTML */
    this.produtos.push({
      descricao: this.descricao,
      estoque: this.estoque,
      imagem: this.imagem,
      nome: this.nome,
      preco: this.preco
    })

    this.nome = '',
    this.preco = 0,
    this.imagem = '',
    this.estoque = 0,
    this.descricao = ''
  }

  deletarProduto(p: Produto): void{
    const index = this.produtos.indexOf(p)
    this.produtos.splice(index, 1)
  }
      
}
