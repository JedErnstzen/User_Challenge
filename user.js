let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => { 
    const isString = typeof calculated == 'numerical-string'; // Check if 'calculated' is a numerical string (Note: 'numerical-string' is not a valid typeof result)
    const calculatedAsNumber = isString ? calculated : Number(calculated); // Convert 'calculated' to a number if it's a string, otherwise keep it as it is
    calculated = calculatedAsNumber + 1; // Increment 'calculated' by 1
}

// Function to update user and state based on calculated value
const calcUser = () => {
    logCalc(); // Call the 'logCalc' function to perform calculations

    // Set user and state based on the value of 'calculated'
    if (calculated > 2) user = 'John'; // Set 'user' to 'John' if 'calculated' is greater than 2
    if (calculated > 2) state = 'requesting'; // Set 'state' to 'requesting' if 'calculated' is greater than 2
    if (calculated > 3) state = 'idle'; // Set 'state' to 'idle' if 'calculated' is greater than 3
}

// Function to check and log user information if user exists and state is 'requesting'
const checkUser = () => {
	if (user && state === 'requesting') { // Check if 'user' exists and 'state' is 'requesting'
		console.log(`User: ${user} (${calculated})`); // Log user information
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()
