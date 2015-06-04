// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, root){

	var matches = [];

	// instantiate root if argument is empty
	if (root === undefined) { root = document.body; }

	// save root's class array. if root has no class, .classList returns undefined
	var rootClass = root.classList;

	// if rootClass is not undefines
	if (rootClass !== undefined) {

		// iterate over all root's classes
		for (var i = 0, classLength = rootClass.length; i < classLength; i++) {
			
			// if class names matched
			if (rootClass[i] === className) { matches.push(root); }
		}
	}
	
	// instantiate children array
	var children = root.childNodes;

	// if no more child - base case
	if (children === undefined) { return; }

	// iterate over all children nodes
	for (var j = 0, childLength = children.length; j < childLength; j++) {
		
		// save the returned value from getElementsByClassName()
		var returnValue = getElementsByClassName(className, children[j]);
		
		// if returnVale is not an empty array
		if ( returnValue[0] !== undefined) {

			// push to matches array
			matches.push(returnValue[0]);
		}
	}

	return matches;
};
