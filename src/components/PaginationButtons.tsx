"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PaginationButtons = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start")! || 1;

  return (
    <div className="text-blue-700 flex px-10 pb-4 sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex >= 2 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 1}`}
        >
          <div className="flex flex-col items-center hover:underline">
            <BsChevronLeft className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 1}`}
        >
          <div className="flex flex-col items-center hover:underline">
            <BsChevronRight className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
};
export default PaginationButtons;
