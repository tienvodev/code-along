import { techMap } from "@/constants/techMap";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techName: string) => {
  const nomalizedTechName = techName.replace(/[ .]/g, "").toLocaleLowerCase();

  return techMap[nomalizedTechName]
    ? `${techMap[nomalizedTechName]} colored`
    : "devicon-devicon-plain";
};
