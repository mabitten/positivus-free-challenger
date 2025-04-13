import Link from "next/link";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

const navigationItems = [
  {
    label: "About us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Use Cases",
    href: "/use-cases",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Blog",
    href: "/blog",
  },
]

export function Navigation({ className }: NavigationProps) {
  return (
    <nav className={cn("flex items-center", className)} aria-label="Main navigation">
      <ul className="flex items-center gap-8">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link 
              href={item.href} 
              className="text-primary hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li className="ml-4">
          <Button
            size="lg"
            variant="outline"
          >
            Request a quote
          </Button>
        </li>
      </ul>
    </nav>
  );
} 