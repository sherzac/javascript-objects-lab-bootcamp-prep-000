var recipes = {}

<<<<<<< HEAD
function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({}, object, { [key]: value}) 
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  
  return object
}
=======
function 
>>>>>>> 1a15460872eb90fe502309f5e8a978533399a083
