#Starter
Hello World site. One "Hello World" page served as both a static html file and rendered from our own node server.

##Client-rendered[*] site

Run any HTTP server to serve your static site, such as `SimpleHTTPServer`:
```
cd 1_starter/client-rendered/
python -m SimpleHTTPServer 8000
```

Navigate to `localhost:8000`


##Server-rendered site

Run `npm install` the first time to get your app dependencies.

Run your server-rendered app:
```
cd 1_starter/server-rendered/
node app.js
```

Navigate to `localhost:8001`

[*]: Since this app doesn't really have any JS to excecute it doesn't really qualify as client-rendered, but it serves as a base to build the more complex apps in this repo.
