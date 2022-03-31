import { v4 as uuid } from "uuid";

export const categories = [
  {
    _id: uuid(),
    categoryName: "Cartoon",
    code: 32,
    description: "Take this quiz to test your knowledge about Cartoons",
  },
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
];
