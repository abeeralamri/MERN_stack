class Ninja{
    constructor(name){
        this.name = name;
        this.health = 150;
        this.speed = 3;
        this.strength = 3;

    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`Name: ${this.name} Health: ${this.health} Speed: ${this.speed} Strength: ${this.strength}`)
    }
    drinkShake(){
         this.health += 10;
    }

}
class Sensei extends Ninja{
    constructor(name){
    super(name)
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
}
speakWisdom(){
    super.drinkShake()
}
}



const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
