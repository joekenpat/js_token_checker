# A script to check for auth token

add the paths you want to protect to the  `protective_paths` variable in the `auth.js` file
> `const protective_paths = ["/admin.html"]`

the import the script into any page at the bottom just before the end of the body tag this function will be needed
E.g
>`<script src="./auth.js"></script>`

`Note:` For the proper routing a webserver is needed.
>