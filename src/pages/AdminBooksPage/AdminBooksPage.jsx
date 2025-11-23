import React, { useState } from "react";
import BooksList from "../../components/BooksList";
import BookFormModal from "../../components/BookFormModal";
import { books as initialBooks } from "../../data";
import AdminLayout from "../../components/AdminLayout";

const AdminBooksPage = () => {
  const [books, setBooks] = useState(initialBooks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  const handleAddBook = (data) => {
    const newBook = { id: Date.now(), ...data };
    setBooks([newBook, ...books]);
  };

  const handleEditBook = (data) => {
    setBooks(books.map((b) => (b.id === editingBook.id ? { ...b, ...data } : b)));
    setEditingBook(null);
  };

  const handleDeleteBook = (id) => setBooks(books.filter((b) => b.id !== id));

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Books Management</h1>

        <div className="flex justify-end mb-6">
          <button
            className="px-6 py-3 rounded-xl bg-teal-400 dark:bg-teal-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition"
            onClick={() => setIsModalOpen(true)}
          >
            Add New Book
          </button>
        </div>

        <BooksList books={books} onEdit={(book) => { setEditingBook(book); setIsModalOpen(true); }} onDelete={handleDeleteBook} />

        <BookFormModal
          isOpen={isModalOpen}
          onClose={() => { setIsModalOpen(false); setEditingBook(null); }}
          onSubmit={editingBook ? handleEditBook : handleAddBook}
          defaultValues={editingBook}
        />
      </div>
    </AdminLayout>
  );
};

export default AdminBooksPage;
