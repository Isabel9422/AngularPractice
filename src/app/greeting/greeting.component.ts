import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  
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

  changeAlignment(align:number){
  switch (align) {
    case 1:
      if(!this.checked1){ 
        this.alignment='left'
        this.checked1=true;
        this.checked2=this.checked3=false;
      }else{this.checked1=false;}       //In the case user unselect any of the checkboxes
      break;
    case 2:
      if(!this.checked2){
        this.alignment='center'
        this.checked1=this.checked3=false;
        this.checked2=true;
      }else{this.checked2=false;}
      break;
    case 3:
      if(!this.checked3){
        this.alignment='right'
        this.checked1=this.checked2=false;
        this.checked3=true;
      }else{this.checked3=false}
      break;
  }
  if(!this.checked2&&!this.checked3){this.alignment='left'}   //If user unselect center or right checkbox, text-alignment will be left by default
}
  
}
