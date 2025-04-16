"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "@/assets/svg";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, []);
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "grid grid-cols-2 lg:whitespace-nowrap w-full items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
        onClick={() => setOpen(!open)}
      >
        {children}
        {open ? (
          <div className="cursor-pointer flex items-center justify-center w-[1.875rem] h-[1.875rem] md:w-[3.625rem] md:h-[3.625rem] rounded-full bg-accent border border-dark-blue justify-self-end">
            <MinusIcon className="md:w-6 md:h-6 w-3 h-3" />
          </div>
        ) : (
          <div className="cursor-pointer flex items-center justify-center w-[1.875rem] h-[1.875rem] md:w-[3.625rem] md:h-[3.625rem] rounded-full bg-accent border border-dark-blue justify-self-end">
            <PlusIcon className="md:w-6 md:h-6 w-3 h-3" />
          </div>
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };