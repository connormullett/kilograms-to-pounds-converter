import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:5000'

@Injectable({
  providedIn: 'root'
})
export class ConverterServiceService {

  constructor(private _http: HttpClient) { }

  convertKilos(k) {
    return this._http.get(`${API_URL}/kilograms/${k}`);
  }

  convertPounds(p) {
    return this._http.get(`${API_URL}/pounds/${p}`);
  }
}
