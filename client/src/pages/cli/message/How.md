- written messages are being uploaded to the database using the ```createMessage``` API endpoint

- we then check if this conversation already exists using ```conversationId```

- if yes, we update the ```readBy``` and ```lastMessage``` attributes

- we get all the messages using react query from the ```getMessages``` API endpoint using the ```conversationId```

- we render all the messages using a map function