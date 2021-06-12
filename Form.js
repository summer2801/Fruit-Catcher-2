class Form{
    constructor(){
       this.input = createInput("your good name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.title2 = createElement('h2');
       this.reset = createButton('reset')
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.title2.hide();
    }
    display() {
        this.title.html("COLLECT FOOD FOR ANIMALS");
        this.title.position(280, 50);
        this.title.style('font-size', '60px');
        this.title.style('color', 'skyblue');
        this.title2.html("write your NAME to register form for donation");
        this.title2.position(300, 280);
        this.title2.style('font-size', '35px');
        this.title2.style('color', 'aquamarine');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(220,640)
        this.reset.style('width','200px')
        this.reset.style('height', '40px');
        this.reset.style('background', 'skyblue')

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Thanks " + player.name)
            this.greeting.position(400,300);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() =>{
          player.updateCount(0);
          game.update(0);
        });

    }
}