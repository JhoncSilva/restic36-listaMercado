import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../../Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = 'http://localhost:3000/produto';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.apiUrl);
  }

  deleteProduct(produto: Produto): Observable<Produto>{
    return this.http.delete<Produto>(`${this.apiUrl}/${produto.id}`);
  }

  addProduct(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(`${this.apiUrl}`, produto);
  }

  toggleCompra(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>(`${this.apiUrl}/${produto.id}`, produto);
  }
}
