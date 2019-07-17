import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Kilograms, Pounds } from '../unit';
import { ConverterServiceService } from '../converter-service.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  private _registerForm: FormGroup;
  k: number;
  p: number;

  kDisplay: number;
  pDisplay: number;

  constructor(private _service: ConverterServiceService) { }

  ngOnInit() {
  }

  // change to kilograms and pounds

  onKilosSubmit() {
    this._service.convertKilos(this.k)
      .subscribe( (new_p: Pounds) => {
	console.log(new_p);
	this.pDisplay = new_p.pounds;
    });
  }

  onPoundsSubmit() {
    this._service.convertPounds(this.p)
      .subscribe( (new_k: Kilograms) => {
	console.log(new_k);
	this.kDisplay = new_k.kilos;
    });
  }
}
