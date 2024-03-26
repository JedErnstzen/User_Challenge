# JavaScript Challenge: Calculating User State

## Overview

In this challenge, we have a JavaScript program that simulates user state calculation based on certain conditions. The program maintains a `state`, `user`, and `calculated` variable. The goal is to implement functions to calculate the user state and check conditions to print the user information accordingly.

## Instructions

You are allowed to modify the code within the provided functions only. The global variables and the function calls (`checkUser()` and `calcUser()`) should remain unchanged.

## Code Structure

- `state`: Represents the state of the user.
- `user`: Represents the user's name.
- `calculated`: Represents a calculated value, initially set to '1'.

### Functions

1. `logCalc()`: A function to calculate `calculated`. It converts `calculated` into a number if it's a 'numerical-string', then increments it by 1.

2. `calcUser()`: This function calls `logCalc()` to update `calculated`. Based on the value of `calculated`, it updates the `state` and assigns a name to the `user`.

3. `checkUser()`: Checks if there's a user and if the state is 'requesting'. If true, it logs the user's name and the current value of `calculated`.

## Provided Code

The provided code contains restrictions to modify only the functions (`logCalc()`, `calcUser()`, and `checkUser()`). Global variables and function calls should remain intact.

## Test Cases

- Ensure `user` is set to 'John' when `calculated` becomes greater than 2.
- Ensure `state` transitions from 'requesting' to 'idle' when `calculated` becomes greater than 3.

## Conclusion

This challenge tests your ability to manipulate variables, control program flow, and understand scope in JavaScript. Ensure that the provided functions update the variables correctly according to the specified conditions.


