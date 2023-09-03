import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked
{

	quantidade: number = 0;

  constructor() { }

	adicionar(){
		this.quantidade += 1;
	}

	decrementar(){
		this.quantidade -= 1;
	}


	/* Sempre que ocorre uma alteração, o componente é verificado, nessa ordem:
			- Checked
			- Content
			- View
	*/

	ngDoCheck(): void {
		console.log(`Olá, eu sou o ngDoCheck`);
	}

	//Quando o primeiro conteudo é iniciado
	ngAfterContentInit(): void {
		console.log(`Olá, eu sou o ngAfterContentInit`);
	}

	//Após alguma alteração acontecer verifica o conteudo
	ngAfterContentChecked(): void {
		console.log(`Olá, eu sou o ngAfterContentChecked`);
	}

	//Depois da inicialização da View
	ngAfterViewInit(): void {
		console.log(`Olá, eu sou o ngAfterViewInit`);
	}

	//Após alguma lateração verifica a view
	ngAfterViewChecked(): void {
		console.log(`Olá, eu sou o ngAfterViewChecked`);
	}
}
