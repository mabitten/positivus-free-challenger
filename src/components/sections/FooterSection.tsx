import Link from "next/link";

import { LogoPositivus, SocialFacebook, SocialLinkedin, SocialX } from "@/assets/svg";
import { Button, Container, Input, Separator } from "@/components";

const FooterSection = () => {
    return ( 
        <Container as="footer" className="bg-dark-blue lg:rounded-t-[2.8125rem] p-5 lg:p-[3.75rem] mt-[8.75rem]">
            <div className="flex flex-col lg:flex-row gap-[2.3125rem] lg:gap-0 justify-between items-center">
                <LogoPositivus className="w-48 h-12" fill="#fff" />
                <nav>
                    <ul className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-start gap-4 lg:gap-10 text-white">
                        <li className="lg:underline">
                            <Link href="/#">About us</Link>
                        </li>
                        <li className="lg:underline">
                            <Link href="/#">Services</Link>
                        </li>
                        <li className="lg:underline">
                            <Link href="/#">Use Cases</Link>
                        </li>
                        <li className="lg:underline">
                            <Link href="/#">Pricing</Link>
                        </li>
                        <li className="lg:underline">
                            <Link href="/#">Blog</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex gap-5 items-center">
                    <Link href="/#">
                        <SocialLinkedin />
                    </Link>
                    <Link href="/#">
                        <SocialFacebook />
                    </Link>
                    <Link href="/#">
                        <SocialX />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-[2.3125rem] lg:gap-0 justify-between mt-16"> 
                <div className="flex flex-col items-center lg:items-start gap-7">
                    <h4 className="inline-block self-center lg:self-start text-lg lg:text-xl font-medium whitespace-nowrap bg-secondary px-1.5 text-black rounded-[.4375rem]">Contact us:</h4>
                    
                    <p className="text-white text-lg font-normal">Email: info@positivus.com</p>

                    <p className="text-white text-lg font-normal">Phone: 555-567-8901</p>
 
                    <div className="flex flex-col items-center lg:items-start">
                        <p className="text-white text-lg font-normal">Address:</p>
                        <span className="text-white text-lg font-normal -mt-1">Moonstone City, Stardust State 12345</span>
                    </div>
                </div>
                <div className="bg-[#292A32] rounded-[.875rem] py-[3.625rem] px-10 gap-5 flex flex-col lg:flex-row items-center">
                    <Input 
                        type="email" 
                        placeholder="Email" 
                        className="bg-transparent text-white border border-white px-9 py-[1.375rem] placeholder:text-white"
                    />
                    <Button className="w-full lg:w-[15.5625rem] h-[4.25rem] lg:px-9 text-xl" variant="secondary">Subscribe to news</Button>
                </div>
            </div>
            <Separator className="mt-[3.125rem]" />
            <div className="flex flex-col lg:flex-row items-center gap-10 mt-[3.125rem]">
                <Link href="/#" className="text-white text-lg font-normal">© 2025 Positivus. All rights reserved.</Link>
                <Link href="/#" className="text-white text-lg font-normal underline">Privacy Policy</Link>
            </div>
        </Container>
    )
}

export default FooterSection;