import Image from "next/image";

import { ArrowInclined } from "@/assets/svg";

type CardVariant = "light" | "primary" | "secondary";

interface CardProps {
    title: string[];
    image: string;
    link?: string;
    variant?: CardVariant; 
}

/**
 * Card component
 * 
 * @param title - Title of the card
 * @param image - Image of the card
 * @param link - Link of the card
 * 
 * @example
 * <Card title={["Search engine", "optimization"]} image="/images/search-engine-optimization.png" link="/search-engine-optimization" />
 */
const Card = ({ title, image, link = "#", variant = "light", ...props }: CardProps) => {
  
  const variantStyles: Record<CardVariant, { background: string; text: string; textBackground: string; buttonBackground: string; buttonArrow: string; buttonText: string; }> = {
    primary: {
      background: 'bg-dark-blue',
      text: 'text-black',
      textBackground: 'bg-white',
      buttonBackground: 'bg-white',
      buttonText: 'text-white',
      buttonArrow: '#191A23',
    },
    secondary: {
      background: 'bg-secondary',
      text: 'text-black',
      textBackground: 'bg-white',
      buttonBackground: 'bg-dark-blue',
      buttonText: 'text-black',
      buttonArrow: '#B9FF66',
    },
    light: {
      background: 'bg-accent',
      text: 'text-black',
      textBackground: 'bg-secondary',
      buttonBackground: 'bg-black',
      buttonText: 'text-black',
      buttonArrow: '#B9FF66',
    },
  };

  const styles = variantStyles[variant];
  
  return (
    <div className={`grid grid-cols-2 rounded-[2.8125rem] ${styles.background} min-h-[19.375rem] p-[3.125rem] border border-b-[.375rem] border-dark-blue`}>
      <div className="flex flex-col">
        {
          title.map((item, index) => (
            <h3 key={index} className={`inline-block self-start text-[1.625rem] md:text-3xl font-medium whitespace-nowrap ${styles.textBackground} px-1.5 rounded-[.4375rem]`}>{item}</h3>
          ))
        }
      </div>
      <Image 
        className="place-self-end row-span-2 self-end md:self-center" 
        src={image} 
        alt="Search engine Otimization" 
        width={210} 
        height={210} 
      />
      <a href={link} className="flex gap-4 items-center" {...props}>
        <div className={`flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 ${styles.buttonBackground}`}>
          <ArrowInclined fill={styles.buttonArrow} />
        </div>
        <p className={`text-xl font-normal hidden md:block ${styles.buttonText}`}>Learn more</p>
      </a>
    </div>
  );
}

export default Card;