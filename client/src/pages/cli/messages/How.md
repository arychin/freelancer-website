p1 sends msg to p2 -> this is one convo

- whoever is currently logged in is the current user and their details 
are stored in the local storage

- we retrieve all the conversations from the db, and we render only the
ones which involve the current user into the table using map

- moment lib is used to write stuff like how long ago was this msg sent

- intially whoever sends the msg (buyer or seller) the msg becomes read
for that person, if the msg is unread then it will be green w mark as read button available, clicking on which will make the green color go away denoting that this msg is read

- onclick of the mark as read button, a function is called with the conversation id as the argument, this function uses useMutation hook to then update the database (change the status of the conversation to read) and invalidate the queries (refetch them), we need the id of the conversation to pass in the api call of useMutation because the route on the backend accept a route w id passed as parameter in the url which is then used to find and update the particular entry in the db table
