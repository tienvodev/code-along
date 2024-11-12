"use client";
import Image from "next/image";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

const LocalSearch = ({
  route,
  imgSrc,
  placeholder,
  otherClasses,
}: {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });

        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });

          router.push(newUrl, { scroll: false });
        }
      }

      return () => clearTimeout(timeoutId);
    }, 300);
  }, [searchQuery, router, route, searchParams, pathname]);

  return (
    <div
      className={cn(
        "background-light800_darkgradient min-h-[56px] flex grow items-center gap-4 rounded-[10px] px-4",
        otherClasses
      )}
    >
      <label htmlFor="search">
        <Image
          src={imgSrc}
          width={24}
          height={24}
          alt={placeholder}
          className="cursor-pointer"
        />
      </label>

      <Input
        id="search"
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
