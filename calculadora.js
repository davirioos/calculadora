function Calculadora(){
  this.display = document.querySelector('.display')

  this.iniciar = function(){
    this.clicaButton();
    this.enterCal();
  };
  this.calcular = function(){

    let calculo = this.display.value
    this.display.value = ''
    this.addDisplay(eval(calculo))

  }

  this.enterCal = function(){
    document.addEventListener('keyup', e =>{
      if(e.keyCode === 13){
        this.calcular()
      }
    })
  }
  this.apagaUm = function() {
      this.display.value = this.display.value.slice(0, -1);
    };

  this.clearDisplay = function(){
    this.display.value = ''
  };
  
  this.clicaButton = function(){
    document.addEventListener('click', e => {
      const el = e.target;
      if(el.classList.contains('btn-num')){
        this.addDisplay(el.innerText)
        this.display.focus()
      };
      if(el.classList.contains('btn-clear'))this.clearDisplay();
      if(el.classList.contains('btn-del'))this.apagaUm()
      if(el.classList.contains('btn-eq')) this.calcular(el.innerText);
      

    })
  };
  this.addDisplay = function(valor){
    this.display.value += valor
  };
}
const calculadora = new Calculadora();
calculadora.iniciar()