import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompartidoService {

  private _name: string = '';
  private _email: string = '';

  constructor() { }

  
  public get name() : string {
    return this._name
  }

  
  public set name(v : string) {
    this._name = v;
  }

  
  public get email() : string {
    return this._email;
  }

  
  public set email(v : string) {
    this._email = v;
  }
  
  
  
  
}
