# Pathfinder Character Sheets

Yes this only further proves I a a geek. Paging though numerous pages of the hard copies for a character was annoying so I decided to do something about it. The tool lists all the characters stored in the mysql db and the user can look at/edit a character. A tabbed navigation breaks down the sections for the stats, skills, feats, saves, to hits, a list of memorized spells, and notes.

##Login IDs and character ownership:
  * Bcrypt and JWToken hash out passwords for a more secure process of logging in
  * Each character has a specific user id so while you can view any character, you can only edit a character that has your user id
  * A user can receive a temporary password in the event they forget their password
  * Users that reset their password must enter in a new password after logging into the system using a temporary password

  
