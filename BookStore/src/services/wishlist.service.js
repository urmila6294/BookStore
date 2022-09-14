import wishlist from '../models/wishlist.model';
import Book from '../models/book.model';

//------------------>
//creating wishlist
export const addwishlist = async (_id, body) => {
const bookCheck = await Book.findById({_id:_id})
console.log(bookCheck);
if (bookCheck) {
    let book = {
      'bookName': bookCheck.bookName,
      'description': bookCheck.description,
      'author': bookCheck.author,
      'price': bookCheck.price,
      'bookImage': bookCheck.bookImage,
      'productId': bookCheck._id,
    }
    const wishlistCheck = await wishlist.findOne({userId:body.userId})
    if(wishlistCheck){
        wishlistCheck.books.push(book)
        const addBooks = await wishlist.findOneAndUpdate({userId: body.userId}, { books: wishlistCheck.books}, { new: true });
        return addBooks;
    }else{
        const createWishlist = await wishlist.create({userId: body.userId, books:[book] })
        return createWishlist;
    }
}
else {
    throw new Error("Book does not exists");
}
}


//get all books from wishlist
export const wishlistBooks = async (_id,body) => {
    const getBooks = await wishlist.findOne({ userId:body.userId  })
    if (getBooks) {
        return getBooks;
    } 
  }

//remove book from wishlist
export const removeBook = async (_id, body) => {
    const wishlistCheck = await wishlist.findOne({ userId: body.userId })
    if (wishlistCheck) {
        wishlistCheck.books.forEach(data => {
        if (data.productId == _id) {
          let indexval = wishlistCheck.books.indexOf(data)
          wishlistCheck.books.splice(indexval, 1)
        }
      });
      const updatebook = wishlist.findOneAndUpdate({userId: body.userId}, { books: wishlistCheck.books}, { new: true });
          return updatebook;
    }
    else{
        throw new Error("wishlist does not exist")
    }
    
}