# autocalver
A Node utility for automatically generating properly formatted calver version numbers. 

Will return a string with a calver version number for today's date, with no leading zeros on the month or day fields (on applicable dates).

## Installation 

```bash
# Install the autocalver package globally if you'd like to use it as a shell command.
npm install -g autocalver

# Install it locally if you'd like to use it as a Node package.
# ...or as locally-available executable. Whatever, it's 2009! 
npm install --save autocalver
```

## Running as a Node package

If you would like to run autocalver as a Node package (i.e. within a JS file): 

```js
const autocalver = require('autocalver')
const calverNumber = autocalver()

console.log(calverNumber)
// => calver number!
```

### Get a calver number for a date other than today

Use Javascript's `Date` constructor to create a `Date` object with your desired date, and pass this to `autocalver`: 

```js
const autocalver = require('autocalver')
const dateObj = new Date('1955-11-5')
const calverNumber = autocalver(dateObj)

console.log(calverNumber)
// => 1955.11.5
```

This feature is not available for the shell script ... yet. Maybe you could implement it in a PR? 🙃

## Running as a shell script 

autocalver can also be run as a shell script. You can call the shell command anywhere in your filesystem if you have installed the package globally, although the command will only be available locally to your specific node project if you have installed it locally. 

```bash
# invoke the script thusly:
autocalver
# => calver number!
```
