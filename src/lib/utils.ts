import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function LocalDate(date: Date) {
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return formattedDate;
}

export function TimeToRead(len: number) {
  switch (true) {
    case len < 5:
      return "Less than a min read";
    case len < 10:
      return "1 min read";
    case len < 20:
      return "5 min read";
    case len < 30:
      return "10 min read";
    case len < 50:
      return "20 min read";
    default:
      return "30+ min read";
  }
}
