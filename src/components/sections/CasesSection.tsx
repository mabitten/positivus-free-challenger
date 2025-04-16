import { ArrowInclined } from "@/assets/svg";
import { Container, HeaderContainer, Separator } from "@/components"
import Link from "next/link";

const CasesSection = () => {
  return (
    
    <Container as="section" className="mt-[3.75rem] md:mt-[10rem]">
      <HeaderContainer title="Case Studies">
        Explore Real-Life Examples of Our Proven Digital Marketing<br className="hidden md:block" />
        Success through Our Case Studies
      </HeaderContainer>

    <div className="flex flex-col md:flex-row gap-7 md:gap-16 bg-black rounded-[2.8125rem] mt-5rem p-[3.125rem] md:p-[3.75rem] mt-[2.5rem] md:mt-[5rem]">
      <div>
        <p className="text-white">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
        
        <Link href="/#" className="flex gap-3.5 items-center text-secondary mt-7">
          Learn more
          <ArrowInclined className="w-4 h-4" />
        </Link>
      </div>

      <Separator orientation="vertical" className="md:min-h-[11.25rem]" />

      <div>
        <p className="text-white">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
        
        <Link href="/#" className="flex gap-3.5 items-center text-secondary mt-7">
          Learn more
          <ArrowInclined className="w-4 h-4" />
        </Link>
      </div>

      <Separator orientation="vertical" className="md:min-h-[11.25rem]" />

      <div>
        <p className="text-white">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
        
        <Link href="/#" className="flex gap-3.5 items-center text-secondary mt-7">
          Learn more
          <ArrowInclined className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </Container>
  )
}

export default CasesSection;