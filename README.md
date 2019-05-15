
# Setting up MongoDB
  ##### 1. Once you have mongodb installed, create the following folder:
       C:\data\db
  ##### 2. cd to C:/Program Files\MongoDB\Server\4.0\bin> and enter cmd 'mongod' to run server
       (Mongo server must run everytime you run the project)
  ##### 3. Import gtfs into mongodb using: [node-gtfs-to-mongodb](https://github.com/Flowlance/node-gtfs-to-mongodb)
  ##### 4. Once imported, go to the bin directory, enter cmd 'mongo' to run the shell (mongod must be running)
       enter 'show dbs' and then enter 'use (insert db name here)'
       db.routes.find({}).pretty() to show all the routes
       db.routes.find({"key" : "value" }).pretty() to show a specific route ("route_id" : "93" for example)
       db.routes.update({}, {$set : {"key": "value"}}) to update a field (route_id or route_url for example)
  ##### 5. Update route_url to pdf file:
      db.routes.update({"route_id" : "93"}, {$set: {"route_url" : "http://sanjoaquinrtd.com/maps_and_schedules/PDF/93.pdf"}})
    
# Setting up Node.js
