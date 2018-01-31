# Bounty Hunter - Part 1, Part 2, Part 3

https://coursework.vschool.io/the-original-bounty-hunter/

You are a bounty hunter of the Old Republic. Your parents were killed by a Sith Lord as a child and your goal in life is to kill all the Sith and Jedi.

In order to help you in your quest, and since you are a do-it-yourself kind of bounty hunter, you have learned programming so you can keep track of your bounties and kills!

Objective
Using Express, create an API on the /bounty route that:

GETs a list of all bounties
POSTs new bounties,
DELETEs a bounty
PUTs (updates) a bounty
Since we haven't started connecting to MongoDB quite yet, you can just save your bounties in a bounties array in your server code. Keep in mind that since it isn't being persisted anywhere, anytime you make a change to your server code and restart the server, you'll lose all your bounties.

A bounty object should have:

First Name
Last Name
Living (Boolean)
Bounty Amount (number)
Type (‘Sith’ or ‘Jedi’)
ID (a unique identifier. Use the uuid package to generate unique ids. - npm install uuid and check the docs to see how to use it. It's as simple as requiring the package and running uuid.v4())
Since there isn't a front end set up yet, you'll just use Postman to interact with the server and update the data.



Part 2 - Adding PUT & DELETE
After learning about req.params, now add endpoints that allow you to:

DELETE a bounty from the bounties array, and
PUT (update) an existing bounty.
You'll need to pass the uuid you added when POSTing new bounties as a URL Parameter to the endpoint in order to have a reference to the object you want to update or delete.

The design and functionality is up to you, so have fun with it!

