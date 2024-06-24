const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
    },
  };
  
  adventurer.companion.companion = {
    name: "Frank",
    type: "Flea",
    belongings: ["small hat", "sunglasses"],
  };
  
  adventurer.roll = function (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log("${this.name} rolled a ${result}.");
  };
  
  adventurer.inventory.forEach((item) => {
    console.log(item);
  });
  
  console.log(adventurer.roll);
  
  class Adventurer {
    constructor(name, health, inventory) {
      this.name = name;
      this.health = health;
      this.inventory = inventory;
    }
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log("${this.name} rolled a ${result}.");
    }
  }
  const robin = new Adventurer("Robin", 10, ["sword", "potion", "artifact"]);
  
  class Companion {
    constructor(name, type, belongings) {
      this.name = name;
      this.type = type;
      this.belongings = belongings;
    }
  }
  
  robin.companion = new Companion("Leo", "Cat", []);
  robin.companion.companion = new Companion("Frank", "Flea", [
    "small hat",
    "sunglasses",
  ]);
  
  robin.roll();
  console.log(robin);
  