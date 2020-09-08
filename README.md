# Projet 6 : "Créer une interface utilisateur pour votre application"

Such as Google Books, Poch'lib is an application where users can search books and save them in their online library. Searching by Title and Author, application will return a list of books with few informations such as : book title, book author, book Id, book description, cover book. It will help "La plume enchanté", a little library, where customers will save books and come get it in store. Application is build in Single Page Application and mobile-first method.

Installation on git :
1/ Click on the green button at the top right "Clone or download" or "Code" (New Git version).
2/ Select "Download ZIP".
3/ Extract the zip file on your computer.

Installation on IDE : Clone this project in your own repository.

This application use Google books API. "Requests to the Books API for public data must be accompanied by an identifier, which can be an API key or an access token.", Google says. Here, an API key need to be generate. All documentations are provide following this link : https://developers.google.com/books/docs/v1/using#APIKey

After you generate an API key, your application can append the query parameter key=yourAPIKey to all request URLs :
1/ Open script.js file
2/ Go to function whenOnClick_Searched and change "&key=yourAPIKey" by yours. Example : url: "https://www.googleapis.com/books/v1/volumes?q=" + searched_title + "+inauthor:" + searched_author + "&key=AIzaSyCb5WGxTMvKOwlIbEF8aDYehEHAgym0u1I",

Launch project by double click on "index.html" which will open an new tab on your browser with the entire project (Google Chrome, Safari, Firefox, Opera, Microsoft Edge new version).

Author VO Frédéric
