- here we are getting the id of the user which is currently 
logged in from the local storage
- then we are getting all the gigs of this particular user from
the database using react-query and axios
- we are then populating the html with these gigs in a table
- we have a delete button on clicking which the particular gig 
assigned to it (using map and iterating we already know this)
will get deleted using the useMutation hook -> useMutation fn 
calls the api endpoint responsible for deleting a gig from the db
and then invalidates the queries to run a refetch w the updated db
