import BookCard from "./BookCard";

const BooksList = ({ books, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BooksList;
