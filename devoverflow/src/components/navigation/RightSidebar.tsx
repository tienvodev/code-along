import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";

const hotQuestions = [
  {
    _id: "1",
    title: "How to create a custom hook in React?",
  },
  {
    _id: "2",
    title: "What are the differences between TypeScript interfaces and types?",
  },
  {
    _id: "3",
    title: "How to optimize performance in a React application?",
  },
  {
    _id: "4",
    title: "How does Next.js handle server-side rendering?",
  },
  {
    _id: "5",
    title: "What are React context and how to use it effectively?",
  },
  {
    _id: "6",
    title: "How to manage state in a large-scale React application?",
  },
  {
    _id: "7",
    title: "What is TailwindCSS and how do I integrate it into a project?",
  },
  {
    _id: "8",
    title: "How to connect a Next.js application to MongoDB?",
  },
  {
    _id: "9",
    title: "What is Zod and why is it used in data validation?",
  },
  {
    _id: "10",
    title: "How to set up authentication using Next-auth?",
  },
];

const popularTags = [
  {
    _id: "1",
    name: "react",
    questions: 100,
  },
  {
    _id: "2",
    name: "typescript",
    questions: 80,
  },
  {
    _id: "3",
    name: "next.js",
    questions: 75,
  },
  {
    _id: "4",
    name: "tailwindcss",
    questions: 65,
  },
  {
    _id: "5",
    name: "mongodb",
    questions: 50,
  },
  {
    _id: "6",
    name: "node.js",
    questions: 120,
  },
  {
    _id: "7",
    name: "zod",
    questions: 30,
  },
  {
    _id: "8",
    name: "authentication",
    questions: 45,
  },
  {
    _id: "9",
    name: "web-development",
    questions: 90,
  },
  {
    _id: "10",
    name: "api-integration",
    questions: 55,
  },
];

const RightSidebar = () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              key={question._id}
              href={ROUTES.PROFILE(question._id)}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <span className="body-medium text-dark500_light700">
                {question.title}
              </span>
              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron"
                width={20}
                height={20}
                className="intert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <TagCard
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              questions={tag.questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
