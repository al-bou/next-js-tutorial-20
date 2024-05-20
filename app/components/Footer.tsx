import Image from "next/image"
import Logo from '../../public/assets/Logo.svg'
import Facebook from '../../public/assets/Facebook.svg'
import Twitter from '../../public/assets/X.svg'
import feed from '../../public/assets/Feed.svg'

export function Footer() {
    return(
        <div className="pt-[80px] pb-[40px]">
            <div className="flex items-center justify-center gap-x-3">
            <Image src={Logo} alt="Logo"/>
            <p className="font-bold text-[#36485C] text-[17px]">John Doe</p>
            </div>
            <ul className="flex flex-col items-center gap-y-8 pt-14 text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
                <li>Features</li>
                <li>Pricing</li>
                <li>Entreprise</li>
                <li>Careers</li>
            </ul>
            <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
                © 2024 John Doe. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-x-[56px] pt-10">
                <Image src={Facebook} alt="Facebook"/>
                <Image src={Twitter} alt="Twitter"/>
                <Image src={feed} alt="Feed"/>
            </div>
        </div>
    )
}