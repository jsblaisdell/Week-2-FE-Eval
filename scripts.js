// Build underscore.js template.
var bookTemplate = _.template($('#templates .book').html());

// Build books array.
var books = [
    {
        title: 'Book 1',
        author: 'Author 1',
        status: 'available'
    },
    {
        title: 'Book 2',
        author: 'Author 2',
        status: 'available'
    },
    {
        title: 'Book 3',
        author: 'Author 3',
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
