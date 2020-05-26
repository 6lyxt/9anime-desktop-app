# 9anime-desktop-app
9anime packed into an desktop application with (beta) discord rich presence

## Usage
With `npm i`, you can install all packages.
After you did that, use `npm start` to start the electron process.
You can build your own app (in case you want to change something in the code) with `npm build`.

## Why is my discord rpc not showing what anime im watching?
This is because of the limitations of `iframes`. I cannot access any inner document data of the iframe
without `cross origin scripting` access. I already sent a request on this theme to 9anime, but they declined it.
If this feature will be added, it will sure take `some time`.
