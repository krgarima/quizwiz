import { v4 as uuid } from "uuid";

export const categories = [
  {
    _id: uuid(),
    categoryName: "Anime",
    code: 31,
    description: "Take this quiz to test your knowledge about Anime.",
  },
  {
    _id: uuid(),
    categoryName: "Animals",
    code: 27,
    description: "Take this quiz to test your knowledge about animals.",
  },
  {
    _id: uuid(),
    categoryName: "Books",
    code: 10,
    description: "Take this quiz to test your knowledge about Books",
  },
  {
    _id: uuid(),
    categoryName: "Cartoons",
    code: 32,
    description: "Take this quiz to test your knowledge about Cartoons",
  },
  {
    _id: uuid(),
    categoryName: "Films",
    code: 11,
    description: "Take this quiz to test your knowledge about Films",
  },
  {
    _id: uuid(),
    categoryName: "Music",
    code: 12,
    description: "Take this quiz to test your knowledge about Music",
  },
  {
    _id: uuid(),
    categoryName: "Television",
    code: 14,
    description: "Take this quiz to test your knowledge about Television",
  },
];
