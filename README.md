# chat-room-app

This is chat room app build using Web Socket

For more info related to Web Socket : https://spring.io/guides/gs/messaging-stomp-websocket/


Tech Stack :
Spring boot, gradle, jquery, bootstrap, javascript, css.


Web Socket:
![image](https://user-images.githubusercontent.com/50209377/189546189-61cba168-d9d6-4d95-b41b-203a3311e398.png)


WebSocket solves a few issues with HTTP: 

Bi-directional protocol – either client/server can send a message to the other party (In HTTP, the request is always initiated by the client and the response is processed by the server – making HTTP a uni-directional protocol)

Full-duplex communication – client and server can talk to each other independently at the same time.

Single TCP connection – After upgrading the HTTP connection in the beginning, client and server communicate over that same TCP connection (persistent connection) throughout the lifecycle of WebSocket connection.

WebSocket Pros
WebSocket is an event-driven protocol, which means you can actually use it for truly realtime communication. Unlike HTTP, where you have to constantly request updates, with websockets, updates are sent immediately when they are available. 

WebSockets keeps a single, persistent connection open while eliminating latency problems that arise with HTTP request/response-based methods.

WebSockets generally do not use XMLHttpRequest, and as such, headers are not sent every-time we need to get more information from the server. This, in turn, reduces the expensive data loads being sent to the server.

WebSocket Cons
WebSockets don’t automatically recover when connections are terminated – this is something you need to implement yourself, and is part of the reason why there are many client-side libraries in existence.

Why use Websocket for chat app :
 with HTTP you have to continuously request updates (and get a response back), which is very resource-intensive: The client establishes a connection, requests an update, gets a response from the server, then closes the connection. Imagine this process being repeated endlessly, by thousands of concurrent users – it’s incredibly taxing on the server at scale.
 
Core Learning:
For messaging, we need to use websocket, 
Important steps done:
1.Create a Message-handling Controller
  Here one endpoint , to send messages.
  Other endpoint - user subscribed to this endpoint receive messages.
  

