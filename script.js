const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	function hasKey(key) {
  // Check if the key exists in the global object sampleObject
  return sampleObject.hasOwnProperty(key);
}

// Global object definition


// Example usage:
console.log(hasKey("red"));   // Should return true
console.log(hasKey("blue"));  // Should return false
console.log(hasKey("white")); // Should return true

}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
