import { cn } from "@/lib/utils";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface WorkingProcessCardProps {
  label: string;
  title: string;
  description: string;
  currentValue: string;
}

function WorkingProcessCard({
  label,
  title,
  description,
  currentValue,
}: WorkingProcessCardProps) {
  return (
    <div
      className={cn(
        currentValue === `item-${label}` ? "bg-secondary" : "bg-accent",
        "rounded-[2.8125rem] p-8 md:p-[3.125rem] border-b-[.375rem] border-b-black mb-[1.875rem]"
      )}
    >
      <AccordionItem value={`item-${label}`}>
        <AccordionTrigger className="hover:no-underline">
          {" "}
          <div className="flex items-center gap-4">
            <span className="text-3xl md:text-6xl font-medium">{label}</span>{" "}
            <h4 className="text-lg md:text-3xl font-medium">{title}</h4>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-lg font-normal">{description}</AccordionContent>
      </AccordionItem>
    </div>
  );
}

export default WorkingProcessCard;