import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Product{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}
}

const url =  "http://localhost:8080/api/kalah";


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) {}

  getProducts() {
      return this.httpClient.get<Object>(url);
  }

  
  performMove(pit){
    let turnDTO = { 
      "playerName": pit.playerName,
      "houseIndex": pit.globalIndex
    }

    // Headers
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.httpClient.post<Object>(url, turnDTO, httpOptions);

  }

  restartGame(){

    // Headers
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.httpClient.patch<Object>(url + "/restartGame", null);

  }

}