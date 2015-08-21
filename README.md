##Pup Buds

####ABOUT

*"Find your best friend's best friend"*

__________________
**GROUP 1**

| group 1       |
| --------------|
| MEGHAN        |
| RACHELLE      |
| EZRA          |
| SAM           |
| ABEL          |


**LINK to our TRELLO board**
[Trello Board](https://trello.com/b/Sebd1Udp/pupbuds).

#### Visit Pup Buds
[Pup Buds](https://pupbuds.herokuapp.com/).

### MVP 
**(User stories)**

- [x]   I want a warm and cute welcome page that reflects puppy happiness.

- [x]   As a user I want to create a profile for me and my puppy.

- [x]   As a user I want to add my own puppy for playdates.

- [x]   As a user I need to set dates aside for my puppy's availability.

- [x]   As a user I want to find puppies by size and friendliness levels.

- [x]   I would like to view individual puppies on their profile page.

- [x]   As a user I would like to view a page with all of owners and puppies(index).

- [x]   As a user I want to be able to log in with my Facebook or Twitter.

- [x]   As a user let me delete or edit my puppy profile.

####ICEBOX

- [ ]   As a user I want to request a puppy to hang out with.

- [ ]   As a user I would like to chat or message puppy owners.

- [ ]   After meeting a puppy I would like to rate them and the owners.

- [ ]   As a user I would like to see what puppies are near me (Google Maps API)

- [ ]   Display puppies that are availalbe NOW!

### Technologies used
**Required**

- MongoDB (database)

- Express JS

- socket IO (but not completed)

- Google Maps API

- Materialize Framework

- Heroku (not by choice)

- Genhis App

### Installation Instructions & Depedencies

1. You will require to have Node Js, MongoDB and Express Js

2. Fork the repo and clone it. [Git Hub Repo](https://github.com/EARnagram/pup_buds).

3. run npm install

4. Google any other questions and learn. 

- *Passport, bootstrap, meterialize.*

### Unsolved issues
Socket iO.
_____________

##Models

| USERS           | MESSAGE           | PUPPIES                   |
| --------------  |  -------------    | ------------------------  |
| name: String    | message: String   | name: String              |
| age: Number     | read: Boolean     | age: Date                 |
| zipCode: String |                   | therapy: Boolean          |
| bio: String     |                   | friendliness: String      |
| url : String    |                   | hypoallergenic: boolean   |
| puppies:        |                   | url: String               |
| *[embeded/id]   |                   | size: String              |
|                 |                   | user:                     |    
|                 |                   | *[embeded/id]             |     


### Branching/Pull Request info
<a id="branching"></a>
![Imgur](http://i.imgur.com/u249zB2.jpg)
