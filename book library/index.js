console.log('fabu library');
let bookList = localStorage.getItem('bookList');
console.log('bookList',bookList);
showBooks();

class Book{
    constructor(name,author,type){
        this.name = name;
        this.author = author;
        this.type = type; 
    }
}

class Display{
    add(book){
        let tableBody = document.getElementById('tableBody');
        let uistring = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uistring;
        console.log(tableBody);

    }

    clear(){
        let formAction = document.getElementById('formAction');
        formAction.reset();
    }

    show(){
        let message = document.getElementById('message');
        let st = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>message! </strong> SOMETHONG WENT WRONG.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
        message.innerHTML += st;

        setTimeout(() => {
            message.innerHTML = '';
        }, 2000);

    }
}

function showBooks(){
    let bookList = JSON.parse(localStorage.getItem('bookList'));
    console.log('bookList',bookList);
    if(bookList === null){
        bookobj = [];
    }else{
        bookobj = bookList;
    }

    //bookobj.push(bookobj);
    console.log('bookobj',bookobj);

    bookobj.forEach(item =>{
        let tableBody = document.getElementById('tableBody');
        let html = `<tr>
                        <td>${item[0]}</td>
                        <td>${item[1]}</td>
                        <td>${item[2]}</td>
                    </tr>`;
        tableBody.innerHTML += html;
        console.log(tableBody);

        // let book = new Book(bookName,authorName,type);
        // console.log(book);
        // let display = new Display();
        // display.add(book);
        // display.clear();
    })

}


let formAction = document.getElementById('formAction');
formAction.addEventListener("submit",booklist);

function booklist(e){
    e.preventDefault();
    console.log("book added!!");
    let bookName = document.getElementById('bookName').value;
    let authorName = document.getElementById('authorName').value;

    //radios button
    let gridRadios1 = document.getElementById('gridRadios1');
    let gridRadios2 = document.getElementById('gridRadios2');
    let gridRadios3 = document.getElementById('gridRadios3');

    let type;
    if(gridRadios1.checked){
        type = gridRadios1.value;
    }else if(gridRadios2.checked){
        type = gridRadios2.value;
    }
    else if(gridRadios3.value){
        type = gridRadios3.value;
    }

    let books = [bookName,authorName,type];
    console.log(books);
    //let bookLi = [];
    // books = JSON.stringify(books);
    //bookList = localStorage.getItem('bookList');
    // if(bookList == null){
    //     bookobj = [];
    // }
    // else{
    //     bookobj = bookList;
    // }
    bookobj.push(books);
    console.log(bookobj);
    localStorage.setItem("bookList",JSON.stringify(bookobj));
    console.log(localStorage.getItem('bookList'));
    let display = new Display();
    display.clear();
    console.log(bookobj);

    let book = new Book(bookName,authorName,type);
    console.log(book);

    //let display = new Display();
    if(book.name.length > 2 || book.author.length > 2){
        display.add(book);
        display.clear();
    }
    else{
        display.show();
        display.clear();
    }
    
    e.preventDefault();
    console.log("book added!!");

}


