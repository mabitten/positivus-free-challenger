import { LetsMake } from "@/assets/svg";
import { Container, Button } from "@/components";

const LetsMakes = () => {
  return (
    <Container as="section" className="relative mt-[4.375rem] md:mt-[7.6875rem] bg-accent rounded-[2.8125rem] p-[3.125rem] md:p-[3.75rem]">
      <div className="flex flex-col items-start gap-4">
        <h3 className="text-black text-[1.625rem] md:text-3xl font-medium">Let’s make things happen</h3>

        <p className="text-black text-base md:text-lg font-normal leading-6">
          Contact us today to learn more about how our digital<br className="hidden md:block" />
          marketing services can help your business grow and<br className="hidden md:block" />
          succeed online.
        </p>
        
        <Button className="w-full lg:w-auto mt-10 lg:px-9" size="lg">Get your free proposal</Button>
      </div>

      <LetsMake className="absolute right-36 -top-5 hidden lg:block" />
      
    </Container>
  )
}   

export default LetsMakes;