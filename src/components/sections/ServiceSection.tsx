import { Container, ServiceCard as Card, HeaderContainer } from "@/components";

const ServiceSection = () => {
    return (
      <Container as="section" className="mt-[3.75rem] md:mt-[8.75rem]">
        <HeaderContainer title="Services">
          At our digital marketing agency, we offer a range of services to<br className="hidden md:block" /> 
          help businesses grow and succeed online. These services include:
        </HeaderContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-10 md:mt-20">
          <Card 
            title={["Search engine", "optimization"]} 
            image="/images/search-engine-optimization.png" 
            link="/#"
            aria-label="Learn more about Search engine Optimization"
          />

          <Card 
            variant="secondary"
            title={["Pay-per-click", "advertising"]} 
            image="/images/pay-per-click-advertising.png" 
            link="/#"
            aria-label="Learn more about Pay-per-click advertising"
          />

          <Card 
            variant="primary"
            title={["Social media", "marketing"]} 
            image="/images/social-media-marketing.png" 
            link="/#"
            aria-label="Learn more about Social media marketing"
          />

          <Card 
            title={["Email", "marketing"]} 
            image="/images/email-marketing.png" 
            link="/#"
            aria-label="Learn more about Email marketing"
          />

          <Card 
            variant="secondary"
            title={["Content", "creation"]} 
            image="/images/content-creation.png" 
            link="/#"
            aria-label="Learn more about Content creation"
          />


          <Card 
            variant="primary"
            title={["Analytics and", "tracking"]} 
            image="/images/analytics-and-tracking.png" 
            link="/#"
            aria-label="Learn more about Analytics and tracking"
          />
        </div>
      </Container>
    )
}

export default ServiceSection;