
var people = {};

people.index =
{
  name: 'erica',
  friends: ['brian', 'greg', 'jerry'],
},

{
  name: 'brian',
  friends: ['erica', 'charles', 'jennifer'],
};

// Should accept two names, update `people`, and return the total number of times those two have met, including this new meeting.
// If either person isn't yet represented in `people`, add them.
// Then increment a count of the meetings between them.
// Assume that the order of arguments doesn't matter (i.e. `meet(A,B)` is the same as `meet(B,A)`), and that meeting oneself _(A==B)_ has no effect.

people.meet = function(nameA,nameB) { // returns a number
    //update people
    if (people.hasOwnProperty(nameA)){
      return people.index[nameA];
    }
    if (people.hasOwnProperty(nameB)){
      return people.index[nameB];
    } else {
      people.push(nameA,nameB);
      return people;
    }

    //return number times met, including new mtg

    // if not in people, add them

    // increment a count of meetinbs between them

}

 // Should return a number greater than 0 if those people have met, and some falseish value if they haven't or don't exist.
people.haveMet = function(nameA,nameB) { //returns a number or falsish
	//...
}


// should return a string listing the names of all people whom `name` has met at least once (or undefined if `name` doesn't exist).   List the names in alphabetical order, and make sure each name appears only once.
people.friendsOf = function(name) { //returns a string
	//...
}

