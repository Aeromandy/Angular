import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { 
    setTimeout(() => {
      this.objStyle['color'] = 'blue';
    }, 3000);
  }

  public user: string  = "Amanda Rodrigues";

  public image: any = {
    src: "https://avatars.githubusercontent.com/u/105327633?v=4",
    alt: "Avatar Amanda Rodrigues"
  };

  public clicar(): void {
    alert("Clicou!");
  }

  public objStyle: any = {
    'font-size': '50px',
    'color': 'red'
  }

  public isError: boolean = false;

  public color: string = "pink";
  
  public sapinho: boolean = true;

  public mudarSapinho(): void {
    this.sapinho = !this.sapinho;
  }

  public peixes: string[] = [
    "tubarão",
    "peixe palhaço",
    "baiacu",
    "carpa",
    "salmão"
  ];

  public pipe: string = "Exemplo de pipe";
  public numberPipe: number = 30.3334;
  public nowPipe = new Date();
  public objPipe = {
    nome: "Amanda Rodrigues",
    idade: 32,
    area: "Tecnologia"
  }
}

