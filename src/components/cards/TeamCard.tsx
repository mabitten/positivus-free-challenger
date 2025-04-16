import Image from "next/image";
import { Separator } from "../ui/separator";
import { LinkedinIcon } from "@/assets/svg";
import Link from "next/link";

interface TeamCardProps {
  name: string;
  position: string;
  experience: string;
  image: string;
  linkedinUrl?: string;
}

const TeamCard = ({ name, position, experience, image, linkedinUrl = "#" }: TeamCardProps) => {
  return (
    <div className="rounded-[2.8125rem] px-12 md:px-9 py-10 border border-primary border-b-[.375rem]">
      <div className="flex justify-between">
        <div className="flex gap-[1.25rem] items-end">

          <Image src={image} alt={name} width={105} height={102} />

          <div>
            <h4 className="text-lg md:text-xl font-medium">{name}</h4>
            <p className="text-base md:text-lg font-normal">{position}</p>
          </div>
        
        </div>
        
        <Link href={linkedinUrl} target="_blank" aria-label={`Linkedin profile of ${name}`}>
          <LinkedinIcon />
        </Link>
      
      </div>

      <div className="my-[1.75rem]">
        <Separator className="border border-black" />
      </div>

      <p className="text-lg font-normal">{experience}</p>
    </div>
  );
}

export default TeamCard;