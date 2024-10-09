import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../../Produto';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule, ButtonComponent, CommonModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  @Output() onAddProduct = new EventEmitter<Produto>();

  produto: string = '';
  quantidade: number = 0;
  comprado: boolean = false;
  mostrarAddProduto: boolean = false;

  AlteraVisualizacao(valor: boolean){
    this.mostrarAddProduto = valor;
  }

  onSubmit() {
    if(!this.produto) {
      alert('Adicione um produto!')
      return;
    }

    if(!this.quantidade) {
      alert('Adicione uma quantidade!')
      return;
    }

    const novoProduto = {
      produto: this.produto,
      quantidade: this.quantidade,
      comprado: this.comprado
    }

    this.onAddProduct.emit(novoProduto);

    this.produto = '';
    this.quantidade = 0;
    this.comprado = false;
  }
}
