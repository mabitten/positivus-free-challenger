import { AmazonLogo, DribbleLogo, HubspotLogo, NetflixLogo, NotionLogo, ZoomLogo } from "@/assets/svg";
import { Container } from "@/components";

const OurClients = () => {
  return (
    <Container as="section" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-24 itens-center justify-center mt-[70px]" aria-label="Our clients">
        <AmazonLogo aria-label="Amazon" />
        <DribbleLogo aria-label="Dribble" />
        <HubspotLogo aria-label="Hubspot" />
        <NetflixLogo aria-label="Netflix" />
        <NotionLogo aria-label="Notion" />
        <ZoomLogo aria-label="Zoom" />
      </Container>
  )
}

export default OurClients;