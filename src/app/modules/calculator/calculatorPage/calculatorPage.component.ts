import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculatorPage.component.html',
  styleUrls: ['./calculatorPage.component.css']
})
export class CalculatorPageComponent implements OnInit {

  @Input() public a:string='';
  @Input() public b:string='';
  @Input() public operator:string='';

  public result:any='';
  public msg:string='';


  constructor() {}

  ngOnInit(): void {
  }

  operation(){
    if(this.operator!=''){
      this.msg="The result is "
    switch(this.operator){
      case '+':
        this.result=parseFloat(this.a)+parseFloat(this.b);
        break;
      case '-':
        this.result=parseFloat(this.a)-parseFloat(this.b);
        break;
      case '*':
        this.result=parseFloat(this.a)*parseFloat(this.b);
        break;
      case '/':
        this.result=parseFloat(this.a)/parseFloat(this.b);
        break;
  }}
  }

  clear(){
    this.a= this.b = this.msg = this.operator = this.result = '';
  }

  number0(){if(this.operator===''){this.a+='0';}else{this.b+='0';}}
  number1(){if(this.operator===''){this.a+='1';}else{this.b+='1';}}
  number2(){if(this.operator===''){this.a+='2';}else{this.b+='2';}}
  number3(){if(this.operator===''){this.a+='3';}else{this.b+='3';}}
  number4(){if(this.operator===''){this.a+='4';}else{this.b+='4';}}
  number5(){if(this.operator===''){this.a+='5';}else{this.b+='5';}}
  number6(){if(this.operator===''){this.a+='6';}else{this.b+='6';}}
  number7(){if(this.operator===''){this.a+='7';}else{this.b+='7';}}
  number8(){if(this.operator===''){this.a+='8';}else{this.b+='8';}}
  number9(){if(this.operator===''){this.a+='9';}else{this.b+='9';}}

  comma(){if(!(this.a&&this.b).includes('.')){ if(this.operator===''){this.a+='.';} else {this.b+='.'; }}}

  addOp(){this.operator='+';}
  subOp(){this.operator='-';}
  mulOp(){this.operator='*';}
  divOp(){this.operator='/';}
}
