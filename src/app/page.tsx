import { 
  OurWorkingProcessSection, 
  TeamSection, 
  ContactUsSection,
  BookConsultingSection,
  ServiceSection,
  LetsMakes,
  CasesSection,
  OurClients
} from "@/components";

export default function Home() {
  return (
    <>
      <BookConsultingSection />

      <OurClients />

      <ServiceSection />

      <LetsMakes />

      <CasesSection />

      <OurWorkingProcessSection />

      <TeamSection />

      <ContactUsSection />
    </>
  );
}
