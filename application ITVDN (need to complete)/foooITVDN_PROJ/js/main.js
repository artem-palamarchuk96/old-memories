var d = document;
var counterAddingBooks = 1;


if ((localStorage.counter === undefined) || (localStorage.counter === null)) {
  var lol = 1;
} 
else lol = localStorage.counter;


$('#add-books').click(function() {
    if (counterAddingBooks <= 3) {
        $('.fieldset-books').append('<table id="table" class="tables"><tr><th>Название *</th><td><input id="bookTitleId" class="books-text" type="text" value="" required></td></tr><tr><th>Жанр *</th><td><input id="bookGenreId" class="books-text" type="text" value="" required></td></tr><tr><th>Кол-во страниц *</th><td><input id="bookPagesId" class="books-text" type="text" value="" required></td></tr></table>');   
        $('#bookTitleId').attr('id', 'bookTitleId'+counterAddingBooks);
        $('#bookGenreId').attr('id', 'bookGenreId'+counterAddingBooks);
        $('#bookPagesId').attr('id', 'bookPagesId'+counterAddingBooks);
          counterAddingBooks++;
    }
    return false;
})

$('#submit').click(function() {
    // Добавление автора
    var name = $('#name').val();
    var surname = $('#surname').val();
    var patronymic = $('#patronymic').val();

    $('#table-outer tbody').append('<tr id="out-row"><td id="name-outer"></td><td id="surname-outer"></td><td id="patronymic-outer"></td><td id="books-outer"></td></tr>');

    // Добавление книг
    for (var i = 1; i <= 3; i++) {
        var title = $('#bookTitleId'+i).val();
        var genre = $('#bookGenreId'+i).val();
        var pages = $('#bookPagesId'+i).val();
        if ($('#bookTitleId'+i).val() != undefined) {
              var books = d.getElementById('books-outer').innerHTML += title + ' ' + genre + ' ' + pages + '<br>';
        }
    }

    $('#name-outer').attr('id', 'name-outer'+lol);
    $('#surname-outer').attr('id', 'surname-outer'+lol);
    $('#patronymic-outer').attr('id', 'patronymic-outer'+lol);
    $('#books-outer').attr('id', 'books-outer'+lol);






    d.getElementById('name-outer'+lol).innerHTML = name;
    d.getElementById('surname-outer'+lol).innerHTML = surname;
    d.getElementById('patronymic-outer'+lol).innerHTML = patronymic;
    d.getElementById('books-outer'+lol).innerHTML = books;
     

    localStorage.setItem('name'+lol, name);
    localStorage.setItem('surname'+lol, surname);
    localStorage.setItem('patronymic'+lol, patronymic);
    localStorage.setItem('books'+lol, books);

        lol++;

      localStorage.setItem('counter', lol);

})
  

$('#download').click(function() {
    $('#table-body').empty();
  for (var i = 1; i < lol; i++) {
      $('#table-outer tbody').append('<tr id="out-row"><td id="name-outer"></td><td id="surname-outer"></td><td id="patronymic-outer"></td><td id="books-outer"></td></tr>');

      $('#name-outer').attr('id', 'name-outer'+i);
      $('#surname-outer').attr('id', 'surname-outer'+i);
      $('#patronymic-outer').attr('id', 'patronymic-outer'+i);
      $('#books-outer').attr('id', 'books-outer'+i);

    d.getElementById('name-outer'+i).innerHTML = localStorage.getItem('name'+i);
    d.getElementById('surname-outer'+i).innerHTML = localStorage.getItem('surname'+i);
    d.getElementById('patronymic-outer'+i).innerHTML = localStorage.getItem('patronymic'+i);
    d.getElementById('books-outer'+i).innerHTML = localStorage.getItem('books'+i);
  }


});


$('#reset').click(function() {
  $('#table-body').empty();
  localStorage.clear();
  lol = 1;
});


  
























        // var tdStrObj = {
        //   name: d.getElementById('name').value,
        //   surname: d.getElementById('surname').value,
        //   patronymic: d.getElementById('patronymic').value,
        //   books: {
        //     bookTitle: $('#bookTitleId').val(),
        //     bookGenre: $('#bookGenreId').val(),
        //     bookPages: $('#bookPagesId').val()
        //   }
        // }


    // d.getElementById('name-outer'+i).innerHTML = localStorage.getItem('name'+i);
    // d.getElementById('surname-outer'+i).innerHTML = localStorage.getItem('surname'+i);
    // d.getElementById('patronymic-outer'+i).innerHTML = localStorage.getItem('patronymic'+i);
    // d.getElementById('books-outer'+i).innerHTML = localStorage.getItem('books'+i);   



// function addBooks()
// {

//  var table = $('#table tbody');

// var mask = 'td_';

//     // Считываем значения с формы
//     var name = document.getElementById('name').value;
//     var surname = document.getElementById('surname').value;
//     var patronymic = document.getElementById('surname2').value;

//     if (name.length > 0) {
//      var cID =+ 0 ;



//      $('<tr></tr>').addClass('trItem').appendTo(table);

//      $('<td></td>').attr('data-id', mask+cID).text(name).appendTo(table);
//      $('<td></td>').attr('data-id', mask+cID).text(surname).appendTo(table);
//      $('<td></td>').attr('data-id', mask+cID).text(surname2).appendTo(table);

//      cID++;


//     }
// }

// $('#download').click(function() {
//     var lsLen = localStorage.length;
//     if (lsLen > 0) {
//         for (var i = 0; i < lsLen; i++) {
//             var key = localStorage.key(i);
//             if(key.indexOf('bookTitleId_') == 0){
//                 $('#result').attr('id', key).text(localStorage.getItem(key));
//             }
//         }
//     }
// })










    // var bookTitle = d.getElementById('bookTitleId').value;
    // var bookGenre = d.getElementById('bookGenreId').value;
    // var bookPages = d.getElementById('bookPagesId').value;

    // $('#bookTitleId').attr('id', 'bookTitleId_'+counter);
    

    // localStorage.setItem('bookTitleId_'+counter, bookTitle);
    // localStorage.setItem('bookGenreId_'+counter, bookGenre);
    // localStorage.setItem('bookPagesId_'+counter, bookPages);
    // counter++;

    // bookTitleOut = localStorage.getItem('bookTitleId_');
    // bookGenreOut = localStorage.getItem('bookGenreId_');
    // bookPagesOut = localStorage.getItem('bookPagesId_');

    // d.getElementById("result").innerHTML += bookTitleOut + ' ' + bookGenreOut + ' ' + bookPagesOut + '<br>';







   //     var name = d.getElementById('name').value;
   //      var surname = d.getElementById('surname').value;
   //       var surname2 = d.getElementById('surname2').value;
   // d.getElementById("result").innerHTML += name + ' ' + surname + ' ' + surname2 + '<br>';


  






    // if (bookTitle.length > 0) {
    //     var nId = 0;

    //     tdList.children('td').each(function(index, el){
    //         var jelId = $(el).attr('data-itemid').slice(4);
    //         if (jelId > nId) 
    //             nId = jelId;
    //     })
    //     nId++;



    // }

// function oneValue(){
// 	var first = document.getElementById('one').value;
// 	var second = document.getElementById('two').value;
// 	var res = +first + +second;
// 	document.getElementById('res').value = res;
// }

// document.getElementById("btn").onclick = oneValue;

// var db = JSON.parse(localStorage.getItem('db')) || [];

// document.getElementById("btn").onclick = function(){
// 	var first = document.getElementById('one').value;
// 	var second = document.getElementById('two').value;
// 	var third = document.getElementById('three').value;
// 	var person = {
// 		name: first,
// 		surname: second,
// 		surname2: third
// 	}

// person.id = db.push(person) - 1;
// db.push(person);

// localStorage.setItem('db',JSON.stringify(db));
// }


// var htmlElem = document.querySelector('html');
// var pElem = document.querySelector('p');
// var imgElem = document.querySelector('img');



///////////////////////////////////////

// 	localStorage.setItem('name', first);
// 	localStorage.setItem('surname', second);
// 	localStorage.setItem('surname2', third);

// document.getElementById("result").innerHTML="Last name: "
// + localStorage.name;

// document.getElementById("result1").innerHTML="Last name: "
// + localStorage.surname;

// document.getElementById("result2").innerHTML="Last name: "
// + localStorage.surname2;



// localStorage.lastName="Smith";
// document.getElementById("one").innerHTML="Last name: " + localStorage.lastName;



	// Initialise. If the database doesn't exist, it is created
// var dataBase = new localStorageDB("db", localStorage);

// // Check if the database was just created. Useful for initial database setup
// if( dataBase.isNew() ) {
//     // create the "books" table
//     dataBase.createTable("author", ["name", "surname", "surname2"]);
//     dataBase.createTable("books", ["title", "genre", "pages"]);
// }

// document.getElementById('btn').onclick = function() {
// 	if(!localStorage.getItem('one')) {
// 		insertData();
// 	} else {
// 		setStyles();
// 	}
// }

// function insertData() {
//   	// insert some data
//     dataBase.insert("author", {name: document.getElementById('one').value,
//     													 surname: document.getElementById('two').value, 
//     													 surname2: document.getElementById('three').value});
//     // commit the database to localStorage
//     // all create/drop/insert/update/delete operations should be committed
//     dataBase.commit();

//   setStyles();
// }

// function setStyles() {
// // lib.queryAll("books", {query: {author: "ramachandran"}});
	
//   // document.getElementById('result').innerHTML = dataBase.serialize();
//   var outer = dataBase.queryAll("author");

//   // document.getElementById('result').innerHTML = JSON.stringify(outer);

// }

//  document.getElementById('btn').onclick = function() {
//  	var person = {
//  		name: document.getElementById('one').value, 
//  		surname : document.getElementById('two').value, 
//  		surname2: document.getElementById('three').value
//  	};



//  	for (var property in person) {
//  		document.getElementById('res1').innerHTML = person["name"];
//  		document.getElementById('res2').innerHTML = person["surname"];
//  		document.getElementById('res3').innerHTML = person["surname2"];
// }

// }



