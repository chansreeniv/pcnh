import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateService {

  constructor() { }

  generateUHID(){
    return '22041001'
  }
}
