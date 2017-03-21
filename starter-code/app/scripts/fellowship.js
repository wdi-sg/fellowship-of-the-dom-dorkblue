console.log('Linked.')
document.addEventListener('DOMContentLoaded', hobbitTheme)
// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
]

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
]

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')

// Part 1

function makeMiddleEarth () {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement('section')
  middleEarth.id = 'middle-earth'
  lands.forEach(function (land) {
    var landArticle = document.createElement('article')
    var landTitle = document.createElement('h1')
    landTitle.textContent = land
    landArticle.appendChild(landTitle)
    middleEarth.appendChild(landArticle)
  })
  body.appendChild(middleEarth)
}
// makeMiddleEarth()

// Part 2

function makeHobbits () {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var hobbitGang = document.createElement('ul')
  hobbitGang.id = 'hobbits'

  hobbits.forEach(function (name) {
    var hobbitLi = document.createElement('li')
    hobbitLi.className = 'hobbit'
    hobbitLi.textContent = name
    hobbitGang.appendChild(hobbitLi)
  })

  var frodo = hobbitGang.querySelectorAll('.hobbit')[0]
  frodo.id = 'frodo'
  console.log(frodo)
  var middleEarth = body.querySelector('#middle-earth')
  var shire = middleEarth.querySelectorAll('article')[0]
  shire.id = 'shire'
  shire.appendChild(hobbitGang)
}

// makeHobbits()

// Part 3

function keepItSecretKeepItSafe () {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var theRing = document.createElement('div')
  theRing.id = 'the-ring'
  theRing.className = 'magic-imbued-jewelry'

  theRing.addEventListener('click', nazgulScreech)

  var hobbitGang = document.querySelectorAll('.hobbit')
  var Frodo = hobbitGang[0]
  Frodo.appendChild(theRing)
}

// keepItSecretKeepItSafe()

// Part 4

function makeBuddies () {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var side = document.createElement('aside')
  var notLegolasses = document.createElement('ul')
  notLegolasses.id = 'notLegolasses'

  buddies.forEach(function (name) {
    var buddiesLi = document.createElement('li')
    buddiesLi.textContent = name
    buddiesLi.className = 'buddies'
    notLegolasses.appendChild(buddiesLi)
  })
  side.appendChild(notLegolasses)

  var middleEarth = body.querySelector('#middle-earth')
  var rivendell = middleEarth.querySelectorAll('article')[1]
  rivendell.id = 'rivendell'
  rivendell.appendChild(side)
}

// makeBuddies()

// Part 5

function beautifulStranger () {
  // change the 'Strider' textnode to 'Aragorn'
  var notLegolas = document.querySelectorAll('.buddies')[3]
  notLegolas.textContent = 'Aragorn'
}

// beautifulStranger()
// Part 6

function leaveTheShire () {
  var hobbitGang = document.querySelector('#hobbits')
  var rivendell = document.querySelector('#rivendell')

  rivendell.appendChild(hobbitGang)
}

// leaveTheShire()

// Part 7

function forgeTheFellowShip () {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var rivendell = document.querySelector('#rivendell')
  var theFellowship = document.createElement('div')
  var theGang = document.createElement('ul')
  theGang.id = 'gangUl'
  // theGang.style.listStyleType = 'none
  theFellowship.id = 'the-fellowship'

  var hobbitGang = document.querySelectorAll('.hobbit')
  var notLegolasses = document.querySelectorAll('.buddies')

  hobbitGang.forEach(function (hobbit) {
    theGang.appendChild(hobbit)
  })

  notLegolasses.forEach(function (notLegolas) {
    theGang.appendChild(notLegolas)
  })

  theFellowship.appendChild(theGang)
  rivendell.appendChild(theFellowship)
}

// forgeTheFellowShip()

// Part 8

function theBalrog () {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var gandalf = document.querySelectorAll('.buddies')[0]
  gandalf.textContent = 'Gandalf the White'
  gandalf.style.backgroundColor = 'white'
  gandalf.style.border = '2px solid gray'
}

// theBalrog()
// Part 9

function hornOfGondor () {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  // alert('Horn of Gondor has been blown!\nSean Bean has been killed by Uruk-hai!')
  var boromir = document.querySelectorAll('.buddies')[4]

  boromir.style.textDecoration = 'line-through'

  var theFellowship = document.querySelector('#the-fellowship')
  var theGang = theFellowship.querySelector('ul')

  var oneDoesNotSimplyWalkIntoMordor = theGang.removeChild(boromir)
}

// hornOfGondor()

// Part 10

function itsDangerousToGoAlone () {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var frodoXSam = document.createElement('ul')
  var frodo = document.querySelectorAll('.hobbit')[0]

  var sam = document.querySelectorAll('.hobbit')[1]
  frodoXSam.appendChild(frodo)
  frodoXSam.appendChild(sam)

  var mountDoom = document.createElement('div')
  mountDoom.id = 'mount-doom'

  var middleEarth = body.querySelector('#middle-earth')
  var mordor = middleEarth.querySelectorAll('article')[2]
  mordor.id = 'mordor'
  mordor.appendChild(frodoXSam)
  mordor.appendChild(mountDoom)
}

// itsDangerousToGoAlone()

// Part 11

function weWantsIt () {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gollum = document.createElement('div')
  gollum.id = 'gollum'
  var frodo = document.querySelector('#frodo')
  var theRing = document.querySelector('#the-ring')

  gollum.appendChild(theRing)

  var mountDoom = document.querySelector('#mount-doom')
  mountDoom.appendChild(gollum)

  console.log(gollum)
}

// weWantsIt()

// Part 12

function thereAndBackAgain () {
  // remove Gollum and the Ring from the document
  // remove all the buddies from the document
  // Move all the hobbits back to the shire
  var mountDoom = document.querySelector('#mount-doom')

  var gollum = document.querySelector('#gollum')
  var myPreciousDed = mountDoom.removeChild(gollum)

  var theGang = document.querySelector('#gangUl')
  var notLegolasses = Array.from(document.querySelectorAll('.buddies'))

  notLegolasses.forEach(function(member) {
    theGang.removeChild(member)
  })

  var theRetiredHobbits = document.createElement('ul')

  theGang = document.querySelector('#gangUl')
  theGang.id = "hobbits"

  var middleEarth = body.querySelector('#middle-earth')
  var mordor = middleEarth.querySelectorAll('article')[2]
  var theSauronSquad = mordor.querySelector('ul')
  var frodoXSam = Array.from(mordor.querySelectorAll('.hobbit'))

  frodoXSam.forEach(function(member) {
    var name = theSauronSquad.removeChild(member)
    theGang.appendChild(name)
  })

  var shire = middleEarth.querySelector('#shire')
  shire.appendChild(theGang)
}

// thereAndBackAgain()
