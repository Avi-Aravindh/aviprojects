import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

export class BooksService {
  constructor(private http: HttpClient) {}

  public getBooks() {
    return this.http.get('api/books', httpOptions);
  }
}
