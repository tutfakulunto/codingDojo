function personConstructor(name) {
   return {
  name: name,
  distance_traveled: 0,
  say_name: function(){
      console.log(person.name);
  },
  say_something: function(phrase){
      console.log('${person.name} says: ${phrase}');
  },
  walk: function(){
      console.log('${person.name} is walking!');
      person.distance_traveled += 3;
      return person;
  },
  run: function(){
      console.log('${person.name} is running!');
      person.distance_traveled += 10;
      return person;
  },
  crawl: function(){
      console.log('${person.name} is crawling!');
      person.distance_traveled += 1;
      return person;
  }
};

function Person(name) {
  this.name = name;
  this.distance_traveled: 0;
  this.say_name = function(){
      console.log(person.name);
  }
  this.walk: function(){
      console.log('${person.name} is walking!');
      person.distance_traveled += 3;
      return person;
  },
  this.run = function(){
      console.log('${person.name} is running!');
      person.distance_traveled += 10;
      return person;
  },
  this.crawl = function(){
      console.log('${person.name} is crawling!');
      person.distance_traveled += 1;
      return person;
  }
}

var Scott = new Person("Scott");
Scott.sayName();


function ninjaConstructor(name) {
    return {
    name: name;
    cohort: "MEAN";
    belt: 1;
    level_up: function(){
        ninja.belt += 1;
    }
        if (belt == 1) {
            beltColor = "yellow"
        } else if (belt == 2) {
            beltColor = "red"
        } else if (belt == 3) {
            beltColor = "black"
        }
    }
};