import { Microphone } from "@/assets/svg";
import { Button, Container } from "@/components";

const BookConsultingSection = () => {
  return (
      <Container as="section" className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 place-items-center md:place-items-start items-start">
      <h2 className="text-[2.5rem] md:text-6xl font-medium leading-14 md:leading-20 md:col-start-1 md:row-start-1">
        Navigating the <br className="hidden md:block" /> 
        digital landscape <br className="hidden md:block" /> 
        for success
      </h2>

      <Microphone className="max-w-[22.5625rem] md:max-w-[37.5rem] w-full mt-2.5 md:col-start-2 md:row-start-1"/>
      
      <div className="md:col-start-1 md:row-start-1 md:mt-[25rem] lg:mt-[18.75rem] xl:mt-[16.25rem]">
        <p className="text-base md:text-xl text-primary leading-6 md:leading-7 mt-5">
          Our digital marketing agency helps businesses <br className="hidden md:block" /> 
          grow and succeed online through a range of <br className="hidden md:block" /> 
          services including SEO, PPC, social media <br className="hidden md:block" /> 
          marketing, and content creation.
        </p>

        <Button className="w-full md:w-auto mt-10 md:px-9" size="lg">Book a consultation</Button>
      </div>
    </Container>
  )
}

export default BookConsultingSection;