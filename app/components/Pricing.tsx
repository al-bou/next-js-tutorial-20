import Image from "next/image"
import Check from "../../public/assets/check.svg"
export function Pricing() {
    return(
        <div className="py-[48px] lg:py-[60px]">
        <h1 className="text-[#172026] text-center text-[24px] font-medium lg:text-[42px]">
            Flexible plans for you
        </h1>
        <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]">
            No hidden fees!
        </p>
        
        <div className="flex flex-col gap-y-6 gap-x-6 lg:flex-row ">

            <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                <div>
                    <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
                        Free Trial
                    </h3>
                    <p className="pt-[12px] text-[#36485C] lg-text-[18px]">
                        Perfect for testing the waters
                    </p>
                    <h2 className="pt-4 text-[24px] font-medium lg:text-[32px]">
                        0$<span className="text-[#5F7896]">/mo</span>
                    </h2>
                    <ul className=" flex flex-col gap-y-2 pt-4 text-[#5F7896]">
                        <li className="flex items-center gap-x-2">
                            <span>
                                <Image src={Check} alt="Included"></Image>
                            </span>
                            Lorem ipsum dolor sit amet
                        </li>
                        <li className="flex items-center gap-x-2">
                            <span>
                                <Image src={Check} alt="Included"></Image>
                            </span>
                            Lorem ipsum dolor sit amet
                        </li>
                        <li className="flex items-center gap-x-2">
                            <span>
                                <Image src={Check} alt="Included"></Image>
                            </span>
                            Lorem ipsum dolor sit amet
                        </li>
                    </ul>

                    
                </div>
                <button className="mt-[16px] w-full rounded-[4px] bg-[#FFFFFF] py-4 text-[#4328EB] font-medium">
                        Start trial
                    </button>

                
            </div>

            <div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col lg:justify-between">
                <div>
                    <h3 className="font-medium text-[#FFFFFF] text-[18px] lg:text-xl">
                        Business
                    </h3>
                    <p className="pt-[12px] text-[#F4F8FA] lg-text-[18px]">
                        Perfect for testing the waters
                    </p>
                    <h2 className="pt-4 text-[24px] font-medium lg:text-[32px] text-white">
                        500$<span className="text-[#F4F8FA]">/mo</span>
                    </h2>
                    <ul className=" flex flex-col gap-y-2 pt-4 text-[#F4F8FA]">
                        <li className="flex items-center gap-x-2">
                            <span>
                                <Image src={Check} alt="Included"></Image>
                            </span>
                            Lorem ipsum dolor sit amet
                        </li>
                        <li className="flex items-center gap-x-2">
                            <span>
                                <Image src={Check} alt="Included"></Image>
                            </span>
                            Lorem ipsum dolor sit amet
                        </li>
                        <li className="flex items-center gap-x-2">
                            <span>
                                <Image src={Check} alt="Included"></Image>
                            </span>
                            Lorem ipsum dolor sit amet
                        </li>
                        <li className="flex items-center gap-x-2">
                            <span>
                                <Image src={Check} alt="Included"></Image>
                            </span>
                            Lorem ipsum dolor sit amet
                        </li>
                        <li className="flex items-center gap-x-2">
                            <span>
                                <Image src={Check} alt="Included"></Image>
                            </span>
                            Lorem ipsum dolor sit amet
                        </li>
                    </ul>

                    
                </div>
                <button className="mt-[16px] w-full rounded-[4px] bg-[#FFFFFF] py-4 text-[#4328EB] font-medium">
                        Get started
                    </button>

                
            </div>

            <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                <div>
                    <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
                        Entreprise
                    </h3>
                    <p className="pt-[12px] text-[#36485C] lg-text-[18px]">
                        Perfect for big companies
                    </p>
                    <h2 className="pt-4 text-[24px] font-medium lg:text-[32px]">
                        Custom
                    </h2>
                    <p className="pt-4 text-[16px] text-[#36485C]">
                        Get in touch with us for a custom plan that fits your needs and budget as well as the needs of your business. For every custom plan, we offer a free trial.
                    </p>
                    <p className="pt-2 text-[16px] text-[#36485C]">
                        This rationale is based on the fact that we believe that you should be able to test our services before you commit to a plan.
                    </p>

                    
                </div>
                <button className="mt-[16px] w-full rounded-[4px] bg-[#FFFFFF] py-4 text-[#4328EB] font-medium">
                        Contact us
                    </button>

                
            </div>

        </div>
        </div>
    )
}
    