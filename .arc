@app
begin-app

@static
folder dist

@http
get /
get  /todos
post /todos
post /todos/delete

@tables
data
  scopeID *String
  dataID **String
  ttl TTL