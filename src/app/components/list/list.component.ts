import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../../Produto';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from "../list-item/list-item.component";
import { AddItemComponent } from "../add-item/add-item.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ListItemComponent, AddItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  produtos: Produto[] = [];
  produtosComprados: Produto[] = [];
  produtosNaoComprados: Produto[] = [];

  constructor(private produtoService:ProdutoService){}

  loadProducts() {
    this.produtoService.getProducts().subscribe((produto) => {
      this.produtos = produto;
      this.produtosNaoComprados = produto.filter(produto => !produto.comprado);
      this.produtosComprados = produto.filter(produto => produto.comprado);
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  deleteProduct(produto: Produto) {
    this.produtoService.deleteProduct(produto).subscribe(() => {
      this.loadProducts();
    });
  }

  addProduct(produto: Produto){
    this.produtoService.addProduct(produto).subscribe(() => {
      this.loadProducts();
    });
  }

  toggleCompra(produto: Produto) {
    produto.comprado = !produto.comprado;
    this.produtoService.toggleCompra(produto).subscribe(() => {
      this.loadProducts();
    });
  }
}
