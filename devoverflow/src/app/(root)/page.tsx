import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const Home = async () => {
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
      <section className="mt-11">Local Search</section>
      HomeFilter
      <div className="mt-10 flex w-full flex-col gap-6">
        <div>Question Card 1</div>
        <div>Question Card 2</div>
        <div>Question Card 3</div>
        <div>Question Card 4</div>
      </div>
    </>
  );
};

export default Home;
