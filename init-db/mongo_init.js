// Create initial user
db.createUser({
  user: "root",
  pwd: "example",
  roles: [
      {
          role: "readWrite",
          db: "db"
      }
  ]
});
