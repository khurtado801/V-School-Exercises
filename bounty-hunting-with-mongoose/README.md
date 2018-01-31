# Bounty Hunting with Mongoose

https://coursework.vschool.io/bounty-hunting-with-mongoose/


Boba Fett has asked you to build him an API so he can keep track of his bounties. You have done a satisfactory job up to this point except that every time the server reloads, all the data is wiped. Boba Fett is absolutely not happy about this because it means he has to go back to Jabba the Hutt to get a list of bounties. To help him out (and more importantly, to make sure you don't get on the list) you have decided to use MongoDB to persistently store the bounty hunter data. And you have decided to use Mongoose to do so.

Since you already have the routes set up and working (from the previous bounty hunter exercise), the first step is to create a data model. You can refer to this document if you need a refresher on how to use mongoose.

Once the data model is created (preferably in a file separate from your routes) it's time to add mongoose queries to your routes. For example, when handling GET requests, use the find query to get a list of all the bounties:

app.get('/bounty', function (req, res) {  
  // assuming your model is called bounty
  Bounty.find({}, function (err, data) {
    // the data parameter contains a list of bounties
    res.send(data);
  });
});