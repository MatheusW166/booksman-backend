import { CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";
import prisma from "../database";

export async function getBooks() {
  return prisma.book.findMany();
}

export async function getBook(id: number) {
  return prisma.book.findUnique({ where: { id } });
}

export async function createBook(book: CreateBook) {
  return prisma.book.create({ data: book });
}

export async function reviewBook(bookReview: CreateReview) {
  return prisma.book.update({
    where: { id: bookReview.bookId }, data: {
      grade: bookReview.grade,
      review: bookReview.review
    }
  })
}