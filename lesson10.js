'use strict';

const books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('div.book');

book[0].before(book[1]);
book[3].before(book[4]);
books[0].append(book[2]);

document.body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

let newBook = document.getElementsByTagName('a')[2];

newBook.textContent = 'Книга 3. this и Прототипы Объектов';

document.querySelector('.adv').remove();

let chapter = book[0].querySelectorAll('ul li');

chapter[10].before(chapter[2]);
chapter[4].before(chapter[6]);
chapter[4].before(chapter[8]);

let chapter5 = book[5].querySelectorAll('ul li');
//debugger;
chapter5[3].before(chapter5[9]);
chapter5[4].after(chapter5[2]);
chapter5[7].after(chapter5[5]);

let chapter6 = book[2].querySelectorAll('ul li');

chapter6[9].innerHTML = '<li>Глава 8: За пределами ES6</li>';

