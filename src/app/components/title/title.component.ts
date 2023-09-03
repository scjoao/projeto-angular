import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-title',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

	nome: string = "João";

	constructor() {

	}

	ngOnInit(): void {
		//Printa o nome quando o componente nasce.
		console.log(this.nome);

		//Logo depois concatena o nome.
		this.nome = `Olá ${this.nome}`;

		//Printa o nome concatenado.
		console.log(this.nome);
	}

}
