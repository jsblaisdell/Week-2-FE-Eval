// Build underscore.js template.
var bookTemplate = _.template($('#templates .book').html());

// Build books array.
var books = [
    {
        title: 'Lord of the Rings',
        author: 'J. R. R. Tolkien',
        status: 'available'
    },
    {
        title: 'Harry Potter',
        author: 'J. K. Rowling',
        status: 'available'
    },
    {
        title: 'Hitchhiker\'s Guide to the Galaxy',
        author: 'Douglas Adams',
        status: 'available'
    }
];

// Render books into HTML.
var renderLibrary = function () {
    for ( i = 0; i < books.length; i++ ) {
        var newBookHtml = bookTemplate(books[i]);
        $('#library').append(newBookHtml);
    }
};

// Call renderLibrary on load
renderLibrary();

// Submit a new book on click
$('#submit').on('click', function(e) {
    e.preventDefault();
    var title   = $('#title').val(),
        author  = $('#author').val(),
        newBook = { title: title, author: author, status: 'available' };
    books.push(newBook);
    $('#library').empty();
    renderLibrary();
});
