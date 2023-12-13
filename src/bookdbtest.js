//test db to see if book cards will generateeee, will be replaced with actual database later if possible
//if there's no time, just create a new database here with actual links and .pdf files for the books, and replace BookImages with actual covers of the book

const bookdbtest = [
    {
        BookImage: "https://www.hollywoodreporter.com/wp-content/uploads/2021/06/M8DREDO_EC001.jpg?w=1296",
        BookName: "The Great Gatsby",
        BookAuthor: "F. Scott Fitzgerald",
        BookGenre: "Classic",
        BookPDFs: "gatsby.pdf",
        BookDesc: "The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=The+Great+Gatsby"
    },
    {
        BookImage: "https://www.hollywoodreporter.com/wp-content/uploads/2021/06/M8DREDO_EC001.jpg?w=1296",
        BookName: "To Kill a Mockingbird",
        BookAuthor: "Harper Lee",
        BookGenre: "Classic",
        BookPDFs: "mockingbird.pdf",
        BookDesc: "The story of Scout Finch and her brother Jem, and their father Atticus, who defends a black man accused of rape.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=To+Kill+a+Mockingbird"
    },
    {
        BookImage: "https://www.hollywoodreporter.com/wp-content/uploads/2021/06/M8DREDO_EC001.jpg?w=1296",
        BookName: "1984",
        BookAuthor: "George Orwell",
        BookGenre: "Dystopian",
        BookPDFs: "1984.pdf",
        BookDesc: "A dystopian novel set in a totalitarian society where independent thinking is brutally suppressed.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=1984"
    },
    {
        BookImage: "image4.jpg",
        BookName: "Pride and Prejudice",
        BookAuthor: "Jane Austen",
        BookGenre: "Classic",
        BookPDFs: "pride_prejudice.pdf",
        BookDesc: "A story of love, reputation, and societal expectations in 19th-century England.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=Pride+and+Prejudice"
    },
    {
        BookImage: "image5.jpg",
        BookName: "The Catcher in the Rye",
        BookAuthor: "J.D. Salinger",
        BookGenre: "Coming-of-age",
        BookPDFs: "catcher_in_the_rye.pdf",
        BookDesc: "The story of Holden Caulfield's experiences in New York City after being expelled from prep school.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=The+Catcher+in+the+Rye"
    },
    {
        BookImage: "image6.jpg",
        BookName: "Harry Potter and the Sorcerer's Stone",
        BookAuthor: "J.K. Rowling",
        BookGenre: "Fantasy",
        BookPDFs: "harry_potter_sorcerers_stone.pdf",
        BookDesc: "The first book in the Harry Potter series, following the journey of a young wizard.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=Harry+Potter+and+the+Sorcerer's+Stone"
    },
    {
        BookImage: "image7.jpg",
        BookName: "The Hobbit",
        BookAuthor: "J.R.R. Tolkien",
        BookGenre: "Fantasy",
        BookPDFs: "the_hobbit.pdf",
        BookDesc: "The prelude to The Lord of the Rings, telling the story of Bilbo Baggins' adventure to reclaim the Lonely Mountain.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=The+Hobbit"
    },
    {
        BookImage: "image8.jpg",
        BookName: "The Alchemist",
        BookAuthor: "Paulo Coelho",
        BookGenre: "Philosophical",
        BookPDFs: "the_alchemist.pdf",
        BookDesc: "A novel about a young Andalusian shepherd named Santiago and his journey to find his personal legend.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=The+Alchemist"
    },
    {
        BookImage: "image9.jpg",
        BookName: "The Lord of the Rings",
        BookAuthor: "J.R.R. Tolkien",
        BookGenre: "Fantasy",
        BookPDFs: "the_lord_of_the_rings.pdf",
        BookDesc: "An epic high fantasy novel that follows the quest to destroy the One Ring and defeat the Dark Lord Sauron.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=The+Lord+of+the+Rings"
    },
    {
        BookImage: "image10.jpg",
        BookName: "The Chronicles of Narnia",
        BookAuthor: "C.S. Lewis",
        BookGenre: "Fantasy",
        BookPDFs: "the_chronicles_of_narnia.pdf",
        BookDesc: "A series of fantasy novels set in the fictional realm of Narnia, featuring various adventures of children.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=The+Chronicles+of+Narnia"
    },
    {
        BookImage: "image11.jpg",
        BookName: "A Game of Thrones",
        BookAuthor: "George R.R. Martin",
        BookGenre: "Fantasy",
        BookPDFs: "a_game_of_thrones.pdf",
        BookDesc: "The first book in the A Song of Ice and Fire series, a tale of political intrigue, power struggles, and epic battles.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=A+Game+of+Thrones"
    },
    {
        BookImage: "image12.jpg",
        BookName: "The Name of the Wind",
        BookAuthor: "Patrick Rothfuss",
        BookGenre: "Fantasy",
        BookPDFs: "the_name_of_the_wind.pdf",
        BookDesc: "The first book in The Kingkiller Chronicle series, following the life of Kvothe, a magically gifted young man.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=The+Name+of+the+Wind"
    },
    {
    BookImage: "image13.jpg",
        BookName: "The Picture of Dorian Gray",
        BookAuthor: "Oscar Wilde",
        BookGenre: "Classic",
        BookPDFs: "dorian_gray.pdf",
        BookDesc: "A novel about a young man named Dorian Gray who remains eternally youthful while a portrait of him ages and reflects his moral decay.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=The+Picture+of+Dorian+Gray"
    },
    {
        BookImage: "image14.jpg",
        BookName: "The Adventures of Tom Sawyer",
        BookAuthor: "Mark Twain",
        BookGenre: "Classic",
        BookPDFs: "tom_sawyer.pdf",
        BookDesc: "The story of a mischievous young boy named Tom Sawyer and his adventures in a small town on the Mississippi River.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=The+Adventures+of+Tom+Sawyer"
    },
    {
        BookImage: "image15.jpg",
        BookName: "Moby-Dick",
        BookAuthor: "Herman Melville",
        BookGenre: "Classic",
        BookPDFs: "moby_dick.pdf",
        BookDesc: "The story of Captain Ahab's obsessive quest for revenge against the white whale, Moby Dick.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=Moby-Dick"
    },
    {
        BookImage: "image16.jpg",
        BookName: "Jane Eyre",
        BookAuthor: "Charlotte Bronte",
        BookGenre: "Classic",
        BookPDFs: "jane_eyre.pdf",
        BookDesc: "The story of a young orphan girl named Jane Eyre and her journey to find love, independence, and self-discovery.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=Jane+Eyre"
    },
    {
        BookImage: "image17.jpg",
        BookName: "The Count of Monte Cristo",
        BookAuthor: "Alexandre Dumas",
        BookGenre: "Classic",
        BookPDFs: "count_of_monte_cristo.pdf",
        BookDesc: "The story of Edmond Dantes, a young sailor who is wrongfully imprisoned and seeks revenge against those who betrayed him.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=The+Count+of+Monte+Cristo"
    },
    {
        BookImage: "image18.jpg",
        BookName: "Brave New World",
        BookAuthor: "Aldous Huxley",
        BookGenre: "Dystopian",
        BookPDFs: "brave_new_world.pdf",
        BookDesc: "A dystopian novel set in a futuristic society where people are genetically engineered and conditioned for conformity.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=Brave+New+World"
    },
    {
        BookImage: "image19.jpg",
        BookName: "The Odyssey",
        BookAuthor: "Homer",
        BookGenre: "Epic",
        BookPDFs: "the_odyssey.pdf",
        BookDesc: "An epic poem that follows the Greek hero Odysseus on his journey home after the Trojan War.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=The+Odyssey"
    },
    {
        BookImage: "image20.jpg",
        BookName: "The Scarlet Letter",
        BookAuthor: "Nathaniel Hawthorne",
        BookGenre: "Classic",
        BookPDFs: "scarlet_letter.pdf",
        BookDesc: "The story of Hester Prynne, who is forced to wear a scarlet letter 'A' as a symbol of her adultery in 17th-century Puritan Boston.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=The+Scarlet+Letter"
    },
    {
        BookImage: "image21.jpg",
        BookName: "The Brothers Karamazov",
        BookAuthor: "Fyodor Dostoevsky",
        BookGenre: "Classic",
        BookPDFs: "brothers_karamazov.pdf",
        BookDesc: "A philosophical novel that explores themes of morality, faith, and the nature of evil through the lives of three brothers.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=The+Brothers+Karamazov"
    },
    {
        BookImage: "image22.jpg",
        BookName: "The Shining",
        BookAuthor: "Stephen King",
        BookGenre: "Horror",
        BookPDFs: "the_shining.pdf",
        BookDesc: "A psychological horror novel about a writer and his family who become caretakers of an isolated hotel during the winter.",
        BookOnlineRead: "https://www.googleapis.com/books/v1/volumes?q=The+Shining"
    },
];
    


export default bookdbtest;

