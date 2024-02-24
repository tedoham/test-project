import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function Navigation() {
  return (
    <nav className="flex flex-row items-center justify-center h-14 px-4 bg-white dark:bg-gray-950">
      <Link className="mx-4" href="#">
        TestValley
      </Link>
      <div className="flex-1 mx-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-gray-300 dark:text-gray-700" />
          <Input
            className="w-full pl-8 peer placeholder-gray-500/50 placeholder-opacity-50 dark:placeholder-gray-400/50 dark:placeholder-opacity-50"
            placeholder="Search..."
            type="search"
          />
        </div>
      </div>
      <div>SignIn</div>
    </nav>
  )
}


function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}