import { Container, Navigation } from "@/components";
import { LogoPositivus } from "@/assets/svg";

const HeaderSection = () => {
    return (
      <Container as="header" className="flex items-center py-16 justify-between">
          <LogoPositivus aria-label="Logo Positivus" className="w-[9rem] md:w-[13.6875rem]" />
          <Navigation />
      </Container>
    )
}

export default HeaderSection;