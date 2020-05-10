import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  qtdeProdutos: number = 200;
  constructor() { }

  ngOnInit(): void {
  }
  getQtdeProdutos(): number {
    return this.qtdeProdutos;
  }
  onSubmitNewsLetter() {
    this.qtdeProdutos = this.qtdeProdutos + 100;
  }

}
