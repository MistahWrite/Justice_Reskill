/*
The List!


In a repl, code editor or in your browser console, create and name an array filled with items! Some ideas:
A grocery list
A list of Hogwarts students
A list of Batman villains
In the code:
access the first element in your array
Add some more items using the unshift or push function
update a value from the third element in the array
Now, let’s suppose that we need to use information from every single one of our items. How could we accomplish this?
What’s one way to access every element in your array?
What are some drawbacks you can think of?
*/
var hogwartsActors = ['Harry Potter', 'Ron Weasly', 'Hermione Grainger'];
hogwartsActors[0];
hogwartsActors.push('Sirius Black');
hogwartsActors.unshift('Albus Dumbledore');
hogwartsActors.splice(2, 0, "Professor Snape");
for(var i = 0; i < hogwartsActors.length; i++) {
  console.log(hogwartsActors[i]);
}
// a drawback to this is it doesn't allow us to do much specific editing unless we just make an exception to it.
