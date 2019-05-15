
# Setting up MongoDB
  #### 1. Once you have mongodb installed, create the following folder:
    C:\data\db
  #### 2. cd to "C:\Program Files\MongoDB\Server\4.0\bin" and enter cmd ".\mongod" to run server
    (Mongo server must run everytime you run the project)
  #### 3. Import gtfs into mongodb using: [node-gtfs-to-mongodb](https://github.com/Flowlance/node-gtfs-to-mongodb)
    cd into node-gtfs-to-mongodb project
    Must install required modules (use "npm install mongoose async csv await")
    Make sure you put each individual text file to "files_to_import" folder and not the whole gtfs folder
    Go to config.js and change database to 'gtfs'
    Then enter "npm start" to import gtfs 
  #### 4. Once imported, go to the bin directory, enter cmd 'mongo' to run the shell (mongod must be running)
    enter 'show dbs' and then enter 'use (insert db name here)'
    db.routes.find({}).pretty() to show all the routes
    db.routes.find({"key" : "value" }).pretty() to show a specific route ("route_id" : "93" for example)
    db.routes.update({}, {$set : {"key": "value"}}) to update a field (route_id or route_url for example)
  #### 5. Update route_url to pdf file:
    db.routes.update({"route_id" : "93"}, {$set: {"route_url" : "http://sanjoaquinrtd.com/maps_and_schedules/PDF/93.pdf"}})
    
# Setting up Node.js
  #### 1. Once you have pulled from the repo, go to powershell and cd into project directory
  #### 2. Install the list of dependencies located in the package.json file. 
    Use "npm install (dependency name)"
  #### 3. Then enter "node index.js" to run the server

# Setting up React
  #### 1. In your project directory enter "npm install create-react-app"
  #### 2. cd into client and install required dependencies 
    "npm install react react-router-dom react-scripts whatwg-fetch leaflet react-leaflet styled-components"
  #### 3. Enter "npm start" to run react app
