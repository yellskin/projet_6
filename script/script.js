/*********************Get the main div id of project named "myBooks"*********************/
const div_myBooks = document.getElementById("myBooks");

/*********************Create button "Ajouter un livre" section*********************/
/*Create div button*/
const div_buttonAddBook = document.createElement("div");
div_buttonAddBook.id = "divButtonAddBook";
div_myBooks.appendChild(div_buttonAddBook);
/*Create button "Ajouter un livre"*/
const button_addBook = document.createElement("button");
button_addBook.name = "buttonAddBook";
button_addBook.id = "buttonAddBook";
button_addBook.textContent = "Ajouter un livre";
div_buttonAddBook.appendChild(button_addBook);

/*********************Create form section*********************/
/*Create div form*/
const div_form = document.createElement("div");
div_form.id = "divForm";
div_myBooks.appendChild(div_form);
/*Create div form's fields*/
const div_form_fields = document.createElement("div");
div_form_fields.id = "divForm_fields";
div_form.appendChild(div_form_fields);
/*Create label book title in div form's fields*/
const label_bookTitle = document.createElement("label");
label_bookTitle.innerHTML = "Titre du Livre";
div_form_fields.appendChild(label_bookTitle);
/*Create input book title in div form's fields*/
const input_bookTitle = document.createElement("input");
input_bookTitle.id = "bookTitle";
input_bookTitle.type = "textarea";
div_form_fields.appendChild(input_bookTitle);
/*Create label author in div form's fields*/
const label_author = document.createElement("label");
label_author.innerHTML = "Auteur";
div_form_fields.appendChild(label_author);
/*Create input author in div form's fields*/
const input_author = document.createElement("input");
input_author.id = "author";
input_author.type = "textarea";
div_form_fields.appendChild(input_author);
/*Add message error when empties fields (Titre du livre et Auteur)*/
const message_title_author_missing = document.createElement("p");
div_form_fields.appendChild(message_title_author_missing);
message_title_author_missing.innerHTML =
  "Merci de renseigner le Titre du livre et le Nom de l'auteur";
message_title_author_missing.id = "errorMessage_title_author";
message_title_author_missing.className = "errorMessage";
message_title_author_missing.style.color = "red";
message_title_author_missing.style.display = "none";
/*Create div form's buttons*/
const div_form_buttons = document.createElement("div");
div_form_buttons.id = "divForm_buttons";
div_form.appendChild(div_form_buttons);
/*Create button "Rechercher" in div form's buttons*/
const button_searchBook = document.createElement("button");
button_searchBook.name = "buttonSearchBook";
button_searchBook.id = "buttonSearchBook";
button_searchBook.textContent = "Rechercher";
div_form_buttons.appendChild(button_searchBook);
/*Create button "Annuler" in div form's buttons*/
const button_cancelSearchBook = document.createElement("button");
button_cancelSearchBook.name = "buttonCancelSearchBook";
button_cancelSearchBook.id = "buttonCancelSearchBook";
button_cancelSearchBook.textContent = "Annuler";
div_form_buttons.appendChild(button_cancelSearchBook);

/*********************Append div "content" to div "myBooks" & Move buttons above break line*********************/
/*Create child div="content" to div="myBooks"*/
const div_myPochList = document.getElementById("content");
div_myBooks.appendChild(div_myPochList);
/*Create div myPoch'lib list*/
const div_books_inMyPochList = document.createElement("div");
div_books_inMyPochList.id = "divBooksInMyPochList";
div_myPochList.appendChild(div_books_inMyPochList);
/*Move hr to the first myPochLibList child*/
const Line = document.querySelector("hr");
div_myBooks.removeChild(Line);
div_myBooks.insertBefore(Line, div_myPochList);

/*********************Set "Résultat de recherche"*********************/
/*Create div for "Résultat de recherche"*/
const div_result = document.createElement("div");
div_result.id = "divResults";
div_myBooks.appendChild(div_result);
/*Add title, type and display style for the "Résultat de recherche" section*/
const div_result_title = document.createElement("h2");
div_result_title.innerHTML = "Résultats de recherche";
div_result_title.className = "h2";
div_result.appendChild(div_result_title);
div_result_title.style.display = "block";
/*Create div for searching results*/
const div_result_books = document.createElement("div");
div_result_books.id = "divResultBooks";
div_result.appendChild(div_result_books);
/*Add message error when no books found*/
const message_NoBookInDB = document.createElement("p");
message_NoBookInDB.innerHTML = "Aucun livre n'a été trouvé";
message_NoBookInDB.id = "errorMessage_book";
message_NoBookInDB.className = "errorMessage";
message_NoBookInDB.style.display = "none";
message_NoBookInDB.style.color = "red";
div_result.appendChild(message_NoBookInDB);

/*********************Set First Page onload*********************/
const div_body = document.getElementsByTagName("body")[0];
div_body.onload = page_onload();

function page_onload() {
  document.getElementById("divButtonAddBook").style.display = "block";
  document.getElementById("divForm").style.display = "none";
  document.getElementById("content").style.display = "block";
  document.getElementById("divResults").style.display = "none";
}

/*********************Set page onclick "Ajouter un livre"*********************/
document.getElementById("buttonAddBook").onclick = function () {
  whenOnClick_addBook();
};

function whenOnClick_addBook() {
  document.getElementById("divButtonAddBook").style.display = "none";
  document.getElementById("divForm").style.display = "block";
  document.getElementById("content").style.display = "block";
  document.getElementById("divResults").style.display = "none";
  if (InPochList) displayResultBooks(book, true);
}

/*********************Set page onclick "Annuler"*********************/
document.getElementById("buttonCancelSearchBook").onclick = function () {
  whenOnclick_cancelSearch();
};

function whenOnclick_cancelSearch() {
  input_author.value = "";
  input_bookTitle.value = "";
  document.getElementById("divButtonAddBook").style.display = "block";
  document.getElementById("divForm").style.display = "none";
  document.getElementById("content").style.display = "block";
  document.getElementById("divResults").style.display = "none";
  document.getElementById("errorMessage_title_author").style.display = "none";
  document.getElementById("errorMessage_book").style.display = "none";
  document.getElementById("divResultBooks").style.display = "none";
  if (InPochList) displayResultBooks(book, true);
}

/*********************Set page searching books with Title and Author*********************/
/*2 variables asking if is it a new search and if is in myPochList*/
var NewSearch = true;
var InPochList = false;
/*Function onclick on button "Rechercher"*/
document.getElementById("buttonSearchBook").onclick = function () {
  whenOnClick_Searched();
};

function whenOnClick_Searched() {
  document.getElementById("divButtonAddBook").style.display = "none";
  document.getElementById("divForm").style.display = "block";
  document.getElementById("content").style.display = "none";
  document.getElementById("divResults").style.display = "block";

  var searched_title = document.getElementById("bookTitle").value;
  var searched_author = document.getElementById("author").value;

  console.log(searched_title);
  console.log(searched_author);

  if (searched_title == "" || searched_author == "") {
    message_title_author_missing.style.display = "block";
    document.getElementById("content").style.display = "block";
    document.getElementById("divResults").style.display = "none";
  } else {
    message_title_author_missing.style.display = "none";
    $.ajax({
      url: "https://www.googleapis.com/books/v1/volumes?q=" +
        searched_title +
        "+inauthor:" +
        searched_author +
        "&key=yourAPIKey",
      dataType: "json",
      type: "GET",
      success: function (data) {
        if (!NewSearch) div_result_books.innerHTML = "";
        if (data.totalItems != 0) {
          div_result_books.style.display = "flex";
          message_NoBookInDB.style.display = "none";
          for (i = 0; i < data.items.length; i++) {
            displayResultBooks(data.items[i], InPochList);
          }
        } else {
          div_result_books.style.display = "none";
          message_NoBookInDB.style.display = "block";
        }
        NewSearch = false;
      },
    });

  }
}

/*********************Displaying results*********************/
function displayResultBooks(book, InPochList) {
  var book_id = book.id;
  var book_title = book.volumeInfo.title ?
    book.volumeInfo.title :
    "Titre manquant";
  var book_author = book.volumeInfo.authors[0];
  var book_description = book.volumeInfo.description ?
    book.volumeInfo.description :
    "Description manquante";
  var book_coverLink = book.volumeInfo.imageLinks ?
    book.volumeInfo.imageLinks.smallThumbnail :
    "img/unavailable.png";
  /*Create div for each book researched*/
  const div_result_book = document.createElement("div");
  div_result_book.id = "divResultBook";
  if (!InPochList) { div_result_books.appendChild(div_result_book); }
  else {
    div_result_book.setAttribute('bookFound_id', book_id);
    div_books_inMyPochList.appendChild(div_result_book);
  }
  /*Create div header for each book researched. We put in the title & the bookmark icon*/
  const div_result_book_header = document.createElement("div");
  div_result_book_header.className = "divResultBookHeader";
  div_result_book.appendChild(div_result_book_header);
  /*Create h2 for each book's title researched*/
  const result_bookTitle = document.createElement("h2");
  result_bookTitle.className = "resultBookTitle";
  div_result_book_header.appendChild(result_bookTitle);
  /*Create i for each book's bookmark icon researched*/
  const result_bookMarkIcon_unclick = document.createElement("i");
  result_bookMarkIcon_unclick.id = "resultBookMarkIcon";
  result_bookMarkIcon_unclick.style = "font-size:30px";
  if (!InPochList) {
    result_bookMarkIcon_unclick.className = "far fa-bookmark";
    result_bookMarkIcon_unclick.title = "Ajouter ce livre dans ma Poch'liste";
  }
  else {
    result_bookMarkIcon_unclick.className = "fas fa-trash-alt";
    result_bookMarkIcon_unclick.title = "Supprimer ce livre dans ma Poch'liste";
  }
  if(!InPochList && sessionStorage.getItem(book_id)) {
    result_bookMarkIcon_unclick.className = "fas fa-bookmark";
    result_bookMarkIcon_unclick.title = "Vous ne pouvez pas ajouter deux fois le même livre";
  }
  div_result_book_header.appendChild(result_bookMarkIcon_unclick);
  /*Create div body for each book researched under div header*/
  const div_result_book_body = document.createElement("div");
  div_result_book_body.className = "divResultBookBody";
  div_result_book.appendChild(div_result_book_body);
  /*Create p for each book's id researched*/
  const result_bookId = document.createElement("p");
  result_bookId.className = "resultBookId";
  div_result_book_body.appendChild(result_bookId);
  /*Create p for each book's author researched*/
  const result_bookAuthor = document.createElement("p");
  result_bookAuthor.className = "resultBookAuthor";
  div_result_book_body.appendChild(result_bookAuthor);
  /*Create p for each book description researched*/
  const result_bookDescription = document.createElement("p");
  result_bookDescription.className = "resultBookDescription";
  div_result_book_body.appendChild(result_bookDescription);
  /*Create p for each book's img researched*/
  const result_bookImgBlock = document.createElement("p");
  result_bookImgBlock.className = "resultbookImgBlock";
  div_result_book_body.appendChild(result_bookImgBlock);
  /*Create img for each book's img researched*/
  const result_bookImg = document.createElement("img");
  result_bookImg.className = "resultbookImg";
  div_result_book_body.appendChild(result_bookImg);
  /*Set the researched's result in each div and each fields for each book found*/
  result_bookId.innerHTML = "Id: " + book_id;
  result_bookTitle.innerHTML = "Titre: " + book_title;
  result_bookAuthor.innerHTML = "Auteur: " + book_author;
  if (book_description.length < 200) {
    result_bookDescription.innerHTML = "Description: " + book_description;
  } else {
    result_bookDescription.innerHTML =
      "Description: " + book_description.substr(0, 200) + " " + "[...]";
  }
  result_bookImg.src = book_coverLink;
  result_bookImg.alt = book_title;

  /*********************Action on the icon BookMark or Delete*********************/
  /*Onclick Bookmark Icon*/
  result_bookMarkIcon_unclick.addEventListener('click', (e) => {
    if (!InPochList) {
      saveBookInDB(book_id, book);
      result_bookMarkIcon_unclick.style = "font-size:30px";
      result_bookMarkIcon_unclick.title = "Livre ajouté dans votre Poch'liste";
      result_bookMarkIcon_unclick.className = "fas fa-bookmark";
    } else {
      deleteBookFromDB(book_id);
    }

  });
  /*Save book*/
  function saveBookInDB(book_id, book) {
    if (sessionStorage.getItem(book_id)) {
      alert("Vous ne pouvez pas ajouter deux fois le même livre");
    } else {
      sessionStorage.setItem(book_id, JSON.stringify(book));
      alert("Le livre est enregistré dans votre Poch'liste");
      displayResultBooks(book, true);
    }
  }
  /*Delete book*/
  function deleteBookFromDB(book_id) {
    sessionStorage.removeItem(book_id);
    alert("Livre supprimé de votre Poch'liste !");
    document.body.querySelector("div[bookFound_id='" + book_id + "']").remove();
  }
}

/*********************Create scroll bar onload & refreshing page*********************/
/*Create scroll div*/
const div_progress = document.createElement("div");
div_progress.id = "progress";
div_body.appendChild(div_progress);
/*Create scroll bar*/
window.onload = () => {
  /*Listen even on scroll*/
  window.addEventListener("scroll", () => {
    /*Calculate document's height*/
    let document_height = document.documentElement.scrollHeight - window.innerHeight;
    /*Get vertical position*/
    let position = window.scrollY;
    /*Get document's width*/
    let document_largeur = document.documentElement.clientWidth;
    /*Calculate bar*/
    let bar = position / document_height * document_largeur;
    /*Modify bar's css*/
    document.getElementById("progress").style.width = bar + "px";
  });

  /*Refresh page will show all books saved*/
  Object.keys(sessionStorage).forEach(book_id => {
    displayResultBooks(JSON.parse(sessionStorage.getItem(book_id)), true);
  });
}

/*********************When on form, click on Enter trigger Search Button*********************/
const inputTitle = document.getElementById("bookTitle");
inputTitle.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("buttonSearchBook").click();
  }
});
const inputAuthor = document.getElementById("author");
inputAuthor.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("buttonSearchBook").click();
  }
});

