import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greetingPage.component.html',
  styleUrls: ['./greetingPage.component.css']
})
export class GreetingPageComponent implements OnInit {
  
  title = 'Exercise1';
  name = '';
  greeting='';
  fontFamily = 'Barlow';
  fontSize:any;
  size:any;
  alignment:string='left';
  checked1:boolean=false;
  checked2:boolean=false;
  checked3:boolean=false;
  repeatedNumber:number=0;

  constructor() { }

  ngOnInit(): void {
  }

    hello(){
      this.greeting =( 'Hello ' + this.name.toUpperCase() + ' !')
      this.name=''
    }
  
    changeSize(){
        this.fontSize= this.size
        this.size= ''
    }
  
    changeFont(value:number){

      switch(value){
        case 1:
        this.fontFamily= 'Fuzzy Bubbles, cursive';
        break;
        case 2:
        this.fontFamily= 'Fasthand, cursive';
        break;
        case 3:
        this.fontFamily= 'Barlow';
        break;
      }
  }

  changeAlignment(option:number){

    if(this.repeatedNumber==option){option=4;}
    this.repeatedNumber = option;

  switch (option) {
    case 1:
        this.alignment='left'
        this.checked1=true;
        this.checked2=this.checked3=false;
      break;
    case 2:
        this.alignment='center'
        this.checked1=this.checked3=false;
        this.checked2=true;
      break;
    case 3:
        this.alignment='right'
        this.checked1=this.checked2=false;
        this.checked3=true;
      break;
    default:
      this.alignment='left'
      this.checked2=this.checked3=false;
      break;
  }

}
  
}
