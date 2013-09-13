var bookTemplate = _.template($('#templates .book').html());

var book = [
    {
        title: '[TITLE]',
        author: '[AUTHOR]',
        status: 'available'
    }
];

for ( i = 0; i < book.length; i++ ) {
    var newBookHtml = bookTemplate(book[i]);
    $('#library').append(newBookHtml);
}
