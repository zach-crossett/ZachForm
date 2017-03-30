# With Docker

##### Prerequisites
- Docker
- Docker Compose

##### Steps
1. `docker-compose up -d`
2. Go to http://localhost:5000/

 - Note: if you need some test data in the database, run `docker-compose exec www node testdata.js`
 - Note: on the first initialization of the database, it's possible for the app to start before the database is ready. This will cause the app to crash. Just run `docker-compose up -d` again once the database is ready and it will start. On subsequent runs, the database will start much faster and there won't be an issue.

# Without Docker

##### Prerequisites
- Access to a mongodb instance
- Node.js
- npm (usually installed with node)
- Bower (npm install -g bower)

##### Steps
1. Edit config/env/development.js with your mongodb connection string
2. `npm install`
3. `bower install`
4. `npm start`
5. Go to http://localhost:5000/

- Note: if you need some test data in the database, run `node testdata.js`

