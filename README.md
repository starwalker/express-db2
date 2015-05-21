# express-db2
To reproduce db2 node.js driver to z/os db2 memory leakage

Keep hitting the following URL repeatly and the node will run out of memory eventually.

http://localhost:3000/v1/parties/5/positions

# Note: please update lib/dbConfig.json to connect an z/os db2 database and update the sql in the positionDaoWithGrouping.js according to your database.

