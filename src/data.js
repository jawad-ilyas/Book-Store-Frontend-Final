// src/data.js

export const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    description:
      "Atomic Habits is a guide to building good habits and breaking bad ones with actionable strategies.",
    reviews: [
      { user: "Alice", rating: 5, comment: "Life-changing book!" },
      { user: "Bob", rating: 4, comment: "Very insightful." },
    ],
    similarBooks: [
      {
        id: 2,
        title: "Educated",
        author: "Tara Westover",
        price: "$14.50",
        image: "https://images.unsplash.com/photo-1581091215367-0b8a154d3be7?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 3,
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        price: "$13.99",
        image: "https://images.unsplash.com/photo-1573495628367-2b6e24f1b3a1?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: 2,
    title: "Educated",
    author: "Tara Westover",
    price: "$14.50",
    image: "https://images.unsplash.com/photo-1581091215367-0b8a154d3be7?auto=format&fit=crop&w=400&q=80",
    description: "Memoir of a woman who grows up in a strict household and pursues education.",
    reviews: [
      { user: "Charlie", rating: 5, comment: "Incredible story." },
      { user: "Diana", rating: 4, comment: "Very inspiring." },
    ],
    similarBooks: [
      {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        price: "$15.99",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: 3,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: "$13.99",
    image: "https://images.unsplash.com/photo-1573495628367-2b6e24f1b3a1?auto=format&fit=crop&w=400&q=80",
    description:
      "A counterintuitive approach to living a good life by caring less about more things.",
    reviews: [
      { user: "Eve", rating: 5, comment: "Funny and practical!" },
      { user: "Frank", rating: 4, comment: "Loved the honesty." },
    ],
    similarBooks: [
      {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        price: "$15.99",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
];

export const topSellers = [books[0], books[1]]; 
export const recommendedBooks = [books[0], books[2]];

export const categories = [
  { id: 1, name: "Fiction", icon: "BookOpenIcon" },
  { id: 2, name: "Non-Fiction", icon: "AcademicCapIcon" },
  { id: 3, name: "Romance", icon: "HeartIcon" },
  { id: 4, name: "Bestsellers", icon: "StarIcon" },
  { id: 5, name: "Mystery", icon: "BookOpenIcon" },
  { id: 6, name: "Science", icon: "AcademicCapIcon" },
];


export const orders = [
  { id: 1, user: "Alice", total: "$45.50", status: "Processing", date: "2025-11-01" },
  { id: 2, user: "Bob", total: "$32.00", status: "Shipped", date: "2025-11-03" },
  { id: 3, user: "Charlie", total: "$120.99", status: "Delivered", date: "2025-11-05" },
  { id: 4, user: "Diana", total: "$78.50", status: "Cancelled", date: "2025-11-07" },
];
export const orderStatuses = ["Processing", "Shipped", "Delivered", "Cancelled"];


export const users = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "User", banned: false },
  { id: 2, name: "Bob", email: "bob@example.com", role: "User", banned: true },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "Admin", banned: false },
  { id: 4, name: "Diana", email: "diana@example.com", role: "User", banned: false },
];

export const userRoles = ["User", "Admin", "Moderator"];