import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
	selector: 'app-title',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

	@Input()
	nome: string = "";

	constructor() {
		console.log(`Olá, eu sou o construtor: ${this.nome}`);
	}

	ngOnInit(): void {
		console.log(`Olá, eu sou o ngOnInit: ${this.nome}`);
	}

	//Atrelado a qualquer mudança e atribuição de valor que acontece via @Input
	ngOnChanges(): void {
		console.log(`Olá, eu sou o ngOnChanges: ${this.nome}`);
	}

}
