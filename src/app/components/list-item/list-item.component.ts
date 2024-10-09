import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../../../Produto';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  @Input() produto!:Produto;
  @Output() onDeleteProduct = new EventEmitter<Produto>();
  @Output() onToggleComprado = new EventEmitter<Produto>();

  faTrash = faTrash;
  faPencil = faPencil;

  onDelete(produto: Produto){
    this.onDeleteProduct.emit(produto);
  }

  onToggle(produto: Produto){
    this.onToggleComprado.emit(produto);
  }
}
