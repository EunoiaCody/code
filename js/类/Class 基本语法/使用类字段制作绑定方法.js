class Button {
  constructor(value) {
    this.value = value;
  }

  click = () => {
    console.log(this.value);
  }
}

let botton = new Button('hello');

setTimeout(button.click, 1000);
