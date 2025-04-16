import React from "react";

import { ContactIllustration } from "@/assets/svg";
import { Button, Label, Input, RadioGroup, RadioGroupItem, HeaderContainer, Container } from "@/components";

function ContactUsSection() {
  return (
    <Container as="section" id="contato" className="mt-[8.75rem]" aria-labelledby="contact-heading">
        <HeaderContainer title="Contact Us">
            Connect with Us: Let&apos;s Discuss Your<br className="hidden lg:block" />
            Digital Marketing Needs
        </HeaderContainer>

      <div className="bg-accent flex justify-between w-full px-8 md:px-[6.25rem] py-10 md:py-[3.75rem] rounded-[2.8125rem] mt-10 md:mt-20 relative overflow-hidden">
        <form 
          className="w-full lg:max-w-[34.75rem] z-10"
          aria-label="Formulário de contato"
          noValidate
        >
            <fieldset>
              <legend className="sr-only">Tipo de contato</legend>
              <RadioGroup defaultValue="say_hi" className="flex" aria-required="true">
                <div className="flex items-center gap-3.5">
                  <RadioGroupItem value="say_hi" id="r1" />
                  <Label htmlFor="r1">Say Hi</Label>
                </div>
                <div className="flex items-center gap-3.5">
                  <RadioGroupItem value="get_a_quote" id="r2" />
                  <Label htmlFor="r2">Get a Quote</Label>
                </div>
              </RadioGroup>
            </fieldset>

          <div className="mt-[25px]">
            <Label htmlFor="name" className="pb-[5px] font-normal text-base">Name</Label>
            <Input 
              type="text" 
              id="name" 
              name="name"
              placeholder="Name" 
              className="px-7 py-4" 
              aria-describedby="name-hint"
              required
            />
            <div id="name-hint" className="sr-only">Digite seu nome completo</div>
          </div>

          <div className="mt-[25px]">
            <Label htmlFor="email" className="pb-[5px] font-normal text-base">
              Email<span aria-hidden="true">*</span>
              <span className="sr-only">(obrigatório)</span>
            </Label>
            <Input 
              type="email" 
              id="email" 
              name="email"
              placeholder="Email" 
              className="px-7 py-4" 
              required 
              aria-required="true"
              aria-describedby="email-hint"
            />
            <div id="email-hint" className="sr-only">Digite seu endereço de email no formato exemplo@dominio.com</div>
          </div>

          <div className="mt-[25px]">
            <Label htmlFor="message" className="pb-[5px] font-normal text-base">
              Message<span aria-hidden="true">*</span>
              <span className="sr-only">(obrigatório)</span>
            </Label>
            <textarea 
              className="w-full px-7 py-4 bg-white rounded-[.875rem] border border-black h-[11.875rem]" 
              id="message" 
              name="message"
              placeholder="Message" 
              required
              aria-required="true"
              aria-describedby="message-hint"
            />
            <div id="message-hint" className="sr-only">Digite sua mensagem detalhando sua necessidade</div>
          </div>

          <Button 
            className="w-full lg:h-[4.25rem] mt-10 lg:px-9 bg-dark-blue" 
            size="lg"
            type="submit"
            aria-label="Enviar mensagem de contato"
          >
            Send Message
          </Button>
        </form>
        <div 
          className="hidden lg:block absolute top-0 right-[-20rem]" 
          aria-hidden="true"
          role="presentation"
        >
          <ContactIllustration />
        </div>
      </div>
    </Container>
  );
}

export default ContactUsSection;