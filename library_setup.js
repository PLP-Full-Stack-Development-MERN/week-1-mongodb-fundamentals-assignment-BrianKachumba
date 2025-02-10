//Question ONE
use library
// The collection 'books' is created upon the first document insertion.

//Question TWO
db.books.insertMany([
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedYear: 1925,
      genre: "Fiction",
      ISBN: "9780743273565"
    },
    {
      title: "1984",
      author: "George Orwell",
      publishedYear: 1949,
      genre: "Dystopian",
      ISBN: "9780451524935"
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publishedYear: 1951,
      genre: "Fiction",
      ISBN: "9780316769488"
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      publishedYear: 1932,
      genre: "Dystopian",
      ISBN: "9780060850524"
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      publishedYear: 1937,
      genre: "Fantasy",
      ISBN: "9780547928227"
    }
  ])


  //Question  THREE
  // Retrieve all books
db.books.find()

// Query books by author
db.books.find({ author: "George Orwell" })

// Books published after 2000 (none in the sample, but adjust year if needed)
db.books.find({ publishedYear: { $gt: 2000 } })

//Question FOUR
// Update publishedYear of a specific book (e.g., The Hobbit to 1954)
db.books.updateOne(
    { ISBN: "9780547928227" },
    { $set: { publishedYear: 1954 } }
  )
  
  // Add 'rating' field with default value 4 to all books
  db.books.updateMany(
    {},
    { $set: { rating: 4 } }
  )

  //Question FIVE
  // Delete a book by ISBN
db.books.deleteOne({ ISBN: "9780060850524" })

// Remove all books of a genre (e.g., Dystopian)
db.books.deleteMany({ genre: "Dystopian" })

//Question SIX
// Users Collection
db.users.insertOne({
    name: "Alice Smith",
    email: "alice@example.com",
    createdAt: new Date()
  })
  
  // Products Collection
  db.products.insertOne({
    name: "Laptop",
    price: 999.99,
    description: "High-performance laptop",
    category: "Electronics",
    stock: 10
  })
  
  // Orders Collection (using references)
  db.orders.insertOne({
    userId: ObjectId("user_id_here"),
    products: [
      { productId: ObjectId("product_id_here"), quantity: 1 }
    ],
    total: 999.99,
    orderDate: new Date()
  })

// Question SEVEN
// Total books per genre
db.books.aggregate([
    { $group: { _id: "$genre", total: { $sum: 1 } } }
  ])
  
  // Average published year
  db.books.aggregate([
    { $group: { _id: null, avgYear: { $avg: "$publishedYear" } } }
  ])
  
  // Top-rated book
  db.books.aggregate([
    { $sort: { rating: -1 } },
    { $limit: 1 }
  ])

  //Questiom EIGHT
  // Create index on author field
db.books.createIndex({ author: 1 })

// Benefits: Speeds up queries filtering or sorting by 'author'.

//Question NINE
db.books.getIndexes()

