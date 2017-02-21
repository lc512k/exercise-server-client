#With Logic
Random Color Generator. Site that generates a random color name between `red`, `orange` and `green`, implemented both as a client-rendered  and a server-rendered site.

The client-rendered version of this app breaks when JS is turned off in the browser. The server-rendered version works as expected.

##Client-rendered site

Run a simple HTTP server in your client-rendered folder to serve static HTML pages
```
cd 2_logic/client-rendered/
python -m SimpleHTTPServer 8000
```

Navigate to `localhost:8000`


##Server-rendered site

Run your server-rendered app
```
cd 2_logic/server-rendered/
node app.js
```

Navigate to `localhost:8001`
