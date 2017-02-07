export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type){
    case 'ADD_PET':
      return Object.assign({}, state, {pets: state.pets.concat(action.payload)})
    case 'REMOVE_PET':
      var selectPet = state.pets.findIndex(pet => pet.id === action.payload)
      //findIndex finds where in the array the object is. In this example selectPet === 1. Pet is the object 
      var newPetsArray = state.pets.slice(0, selectPet).concat(state.pets.slice(selectPet+1))
      return Object.assign({}, state, {pets: newPetsArray})
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  var listPets = state.pets.map(function(pet){
    //remember to use back ticks or else the JQuery function won't work
    return `<li>${pet.name}</li>`
  })
  document.getElementById('container').innerHtml = `<ul>${listPets}</ul>`
}


// Since our users want to see their pets on a webpage we want to have a render method that inserts a <ul> to the DOM with each pet's name wrapped in an <li>. The <ul> should be a child of an element with the id of container. There's no need to load jQuery into our app for such a small task. We can make use of built-in JavaScript methods like document.getElementById.
//
