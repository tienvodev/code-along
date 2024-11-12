import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
const questions = [
  {
    _id: "1",
    title: "What is React context?",
    description:
      "Looking for an explanation of React context and how to use it.",
    tags: [{ _id: "1", name: "React" }],
    author: {
      _id: "1",
      name: "John Doe",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=John%20Doe",
    },
    upvotes: 15,
    answers: 3,
    views: 120,
    createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
  },
  {
    _id: "2",
    title: "Understanding closures in JavaScript?",
    description: "Can someone explain closures in JavaScript with examples?",
    tags: [{ _id: "2", name: "JavaScript" }],
    author: {
      _id: "2",
      name: "Jane Smith",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Jane%20Smith",
    },
    upvotes: 22,
    answers: 7,
    views: 250,
    createdAt: new Date(new Date().setDate(new Date().getDate() - 2)),
  },
  {
    _id: "3",
    title: "Node.js vs Deno?",
    description: "What are the key differences between Node.js and Deno?",
    tags: [{ _id: "3", name: "Node.js" }],
    author: {
      _id: "3",
      name: "Michael Brown",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Michael%20Brown",
    },
    upvotes: 35,
    answers: 10,
    views: 400,
    createdAt: new Date(new Date().setDate(new Date().getDate() - 5)),
  },
  {
    _id: "4",
    title: "CSS flexbox alignment issues?",
    description: "Having trouble aligning items with CSS flexbox.",
    tags: [{ _id: "4", name: "CSS" }],
    author: {
      _id: "4",
      name: "Alice Green",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Alice%20Green",
    },
    upvotes: 12,
    answers: 4,
    views: 150,
    createdAt: new Date(new Date().setDate(new Date().getDate() - 7)),
  },
  {
    _id: "5",
    title: "Optimizing React performance?",
    description:
      "Best practices for optimizing performance in React applications.",
    tags: [{ _id: "1", name: "React" }],
    author: {
      _id: "5",
      name: "Tom Blue",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Tom%20Blue",
    },
    upvotes: 18,
    answers: 6,
    views: 220,
    createdAt: new Date(new Date().setDate(new Date().getDate() - 3)),
  },
  {
    _id: "6",
    title: "Async/Await vs Promises?",
    description:
      "When to use async/await vs traditional Promises in JavaScript.",
    tags: [{ _id: "2", name: "JavaScript" }],
    author: {
      _id: "6",
      name: "Emily White",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Emily%20White",
    },
    upvotes: 25,
    answers: 9,
    views: 300,
    createdAt: new Date(new Date().setDate(new Date().getDate() - 10)),
  },
  {
    _id: "7",
    title: "Node.js project structure?",
    description: "Best practices for structuring a Node.js project.",
    tags: [{ _id: "3", name: "Node.js" }],
    author: {
      _id: "7",
      name: "Chris Black",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Chris%20Black",
    },
    upvotes: 14,
    answers: 5,
    views: 180,
    createdAt: new Date(new Date().setDate(new Date().getDate() - 6)),
  },
  {
    _id: "8",
    title: "Understanding React lifecycle methods?",
    description: "How do React component lifecycle methods work?",
    tags: [{ _id: "1", name: "React" }],
    author: {
      _id: "8",
      name: "Anna Gray",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Anna%20Gray",
    },
    upvotes: 30,
    answers: 12,
    views: 450,
    createdAt: new Date(new Date().setDate(new Date().getDate() - 15)),
  },
  {
    _id: "9",
    title: "CSS animations for beginners?",
    description: "Looking for a guide on creating basic CSS animations.",
    tags: [{ _id: "4", name: "CSS" }],
    author: {
      _id: "9",
      name: "David Silver",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=David%20Silver",
    },
    upvotes: 9,
    answers: 2,
    views: 100,
    createdAt: new Date(new Date().setDate(new Date().getDate() - 20)),
  },
  {
    _id: "10",
    title: "Frontend vs backend development?",
    description: "Differences and roles of frontend and backend developers.",
    tags: [
      { _id: "5", name: "Frontend" },
      { _id: "6", name: "Backend" },
    ],
    author: {
      _id: "10",
      name: "Karen Brown",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Karen%20Brown",
    },
    upvotes: 40,
    answers: 20,
    views: 600,
    createdAt: new Date(new Date().setDate(new Date().getDate() - 30)),
  },
];

interface SearchParams {
  searchParams: Promise<Record<string, string>>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    // Match query against the title
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());

    // Match filter against tags or author name, adjust logic as needed
    const matchesFilter = filter
      ? question.tags.some(
          (tag) => tag.name.toLowerCase() === filter.toLowerCase()
        ) || question.author.name.toLowerCase() === filter.toLowerCase()
      : true; // If no filter is provided, include all questions

    return matchesQuery && matchesFilter;
  });

  return (
    <>
      <section className="w-full flex flex-col-reverse sm:flex-row justify-between gap-4">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          asChild
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard
            key={question._id}
            question={question}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
