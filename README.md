# JavaScript Type Coercion Bug

This repository demonstrates a subtle bug in a JavaScript function that involves type coercion. The `foo` function is designed to add two numbers, but it incorrectly handles the case where one or both inputs are `null` or `0`.

## Bug Description

The issue lies in how the function handles `null` values.  The `===` operator performs strict equality comparison.  While it correctly identifies `null` values, it doesn't consider that `0` might be an intended input and should be treated as a number.  This leads to incorrect results when `0` is passed as an argument.

## Solution

The solution involves using loose equality (`==`) for checking against `null` or `0`. This will consider 0 as a valid input instead of treating it as a null or undefined value.

## How to reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `node bug.js` to see the incorrect output.
4. Run `node bugSolution.js` to see the corrected output.