var bookTemplate = _.template($('#templates .book').html());

var book = [
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

for ( i = 0; i < book.length; i++ ) {
    var newBookHtml = bookTemplate(book[i]);
    $('#library').append(newBookHtml);
}
