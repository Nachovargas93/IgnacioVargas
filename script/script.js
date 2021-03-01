console.log('hola');

function init() {
    this.showInfo();
}
  
  // elsewhere in code
  init();

  function showInfo(){
      this.$("#info").show();
      this.$("#cv").hide();
      this.$("#contacto").hide();
  }

  function showCv(){
    this.$("#info").hide();
    this.$("#cv").show();
    this.$("#contacto").hide();
}

function showContacto(){
    this.$("#info").hide();
    this.$("#cv").hide();
    this.$("#contacto").show();
}