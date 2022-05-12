# Password Generator

## Description

This project was to take some starter code, and create a fully functional password generator.

This proved to certainly be a challenge in logic. However, taking the time to break down each step into manageable parts helped me accomplish the task, and better understand js while I was at it!

I also realized that there are multiple ways to accomplish the same task. I actually built my first password generator using ASCii Table codes (https://hackpres.github.io/passwordGenASCii/), but I believe that this method will actually generate a more random password, as it is randomly selecting a character type array before randomly selecting a character within that array.

The acceptance criteria was as follows:
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Git Links

github repo link:
https://github.com/hackpres/passwordGen

github deployed app link:
https://hackpres.github.io/passwordGen/

## Screenshots of deployed app
![passwordGen](./assets/images/passwordGen.png?raw=true "Password Generator")
![passwordExample](./assets/images/passwordExample.png?raw=true "Password Example")

User prompt box
![userPrompt](./assets/images/promptLength.png?raw=true "Length Prompt")

User confirm boxes
![lowercaseConfirm](./assets/images/lowercase.png?raw=true "Confirm Lowercase?")
![uppercaseConfirm](./assets/images/uppercase.png?raw=true "Confirm Uppercase?")
![numberConfirm](./assets/images/numbers.png?raw=true "Confirm Numbers?")
![specialConfirm](./assets/images/specials.png?raw=true "Confirm Special Characters?")
![validateLength](./assets/images/whileLength.png?raw=true "Validate Length is a number 8-128")

## Usage and Features

The starter code was missing the generatePassword() function, so I started by creating that.

I then added a prompt for character length and confirms for each character type (lowercase, uppercase, number, special).
Then I started a while loop that loop to confirm that the user gave us a number between 8 and 128 in our window prompt.
![promptsConfirms](./assets/images/promptsConfirms.png?raw=true "Prompt and Confirms")

The next step was to create arrays of each character type.
![charArrays](./assets/images/charArrays.png?raw=true "Character Arrays")

After creating the Character arrays I created a new variable called possibleChars and set its value to an empty array.

Then using if statements, I push the character arrays that the user confirmed into the possibleChars array. This creates an array of arrays (a maximum of 4 nested arrays, as there are only 4 character types)
![possibleChars](./assets/images/possibleChars.png?raw=true "Possible Character Array")

Now were on to the good part. The for loop that does our generating.

I  first created a new variable called passwordChars and set its value to an empty string.

Then I opened a for loop giving it three expressions; i = 0, i < promptLength, and i + 1.
This will tell the for loop to start with i at 0 and run the statement until i is equal to promptLength incrementing i by 1 evertime the statement runs.

For the for statement, I created a new variable called rand1 and set its value to the function Math.floor(Math.random() * possibleChars.length) This will change the value of rand1 everytime the loop runs giving us a random number between 0 and the length of possibleChars (which again is dictated by the user responses to our confirms).

Then I add to the string of passwordChars, possibleChars[rand1][Math.floor(Math.random() * possibleChars[rand1.length])] This bit of code will take the number generated for rand1 and use it to set the index possition of possibleChars. Then using Math.floor(Math.random() * possibleChars[rand1].length) it will return a random number from index position 0 to the length of the array at possibleChars[rand1].

Finally, once the for loop has incremented i to equal promptlength it will return the variable passwordChars (which now has a value of a string of our randomly generated password).
![generatePasswordMath](./assets/images/generatePasswordMath.png?raw=true "Password Generation Math")

The final bit of code here is part of the starter code, I only added comments showing what is happening.

A function writePassword() is created this function is envoked when the generateBtn is clicked.

The function creates a variable called password, and sets its value equal to the function generatePassword().

Then another variable is created called passwordText and its value is set to the document location with an id of "password" (which is the text area on the div with a class of "card-body").

finally .value is an input text value property so passwordText.value = password; is saying input the value of password into passwordText. This will write the password into the text area on the div with a class of "card-body".
![writePassword](./assets/images/writePassword.png?raw=true "Write Password Function")