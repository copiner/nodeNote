
var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
}

util.inherits(Person,events.EventEmitter);

var tim = new Person('tim');
var park = new Person('park');
var manu = new Person('manu');

var people = [tim,park,manu];

people.forEach(function(person){
    person.on('speak',function(msg){
	console.log(person.name + ' said: ' + msg);
    });
});

tim.emit('speak','hey dudes');
manu.emit('speak','hey tim');
