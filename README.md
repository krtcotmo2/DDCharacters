
![alt text](https://img.shields.io/badge/uses-Node-brightgreen.svg) ![alt text](https://img.shields.io/badge/uses-MySql-brightgreen.svg) ![alt text](https://img.shields.io/badge/uses-Express-brightgreen.svg) ![alt text](https://img.shields.io/badge/uses-bcrypt-brightgreen.svg) ![alt text](https://img.shields.io/badge/uses-Json_Web_Token-brightgreen.svg) ![alt text](https://img.shields.io/badge/uses-Lodash-brightgreen.svg)

![alt text](https://img.shields.io/badge/uses-Angular-blue.svg) ![alt text](https://img.shields.io/badge/uses-Material-blue.svg)  ![alt text](https://img.shields.io/badge/uses-Semantic-blue.svg)

https://dd-characters.herokuapp.com/

Yes this only further proves I a a geek. Paging though numerous pages of the hard copies for a character was annoying so I decided to do something about it. The tool lists all the characters stored in the mysql db and the user can look at/edit a character. A tabbed navigation breaks down the sections for the stats, skills, feats, saves, to hits, a list of memorized spells, and notes.

## Login IDs and character ownership:
  * Bcrypt and JWToken hash out passwords for a more secure process of logging in
  * Each character has a specific user id so while you can view any character, you can only edit a character that has your user id
  * A user can receive a temporary password in the event they forget their password
  * Users that reset their password must enter in a new password after logging into the system using a temporary password
## Accumulated stats:
  * Most values from stats and saves to skills and to hits have a Accumulated Score.
  * It can be easy to forget how a score was created so the tool allows multiple values to be stored under each score
  * Each individual value can have its own unique description to enable the user to know if a modifier came form a feat, or a magical device or a base score
  * Each value can be removed or modified as needed 
## Ordering of Lists
  * Most lists have the ability to be custom sorted using a drag and drop technique
## Expanded Notes
* Notes page allows user to create a notes topic
* Each note can have individual pieces of information about the note
* Allows for deeper definitions of more complex or layer information
## Filtering for Lists
* Almost all lists can be filtered by typing in a key word search
* The tool searches for the keywords within the title and decryption portion of the list items, hiding those items not containing the keyword


