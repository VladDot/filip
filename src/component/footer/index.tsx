import Link from "next/link";
import Image from "next/image";

import { LogoHorizontal, Master, Visa } from "@/assets/img";

import { Social } from "../social";

export const Footer = ({}) => {
    return (
        <section className="w-full px-5 lg:px-[60px] pt-[60px] max-w-[1440px] mx-auto pb-5 bg-white relative z-[6]">
            <div className="flex flex-col mb-[30px] md:flex-row md:justify-between">
                <div className="w-full max-w-[168px] lg:max-w-[249px] mb-10 inline-block">
                    <Image
                        alt="logo"
                        className="w-full"
                        src={LogoHorizontal}
                    />
                </div>

                <div className="flex flex-col gap-x-0 gap-y-5 *:text-lg sm:flex-row sm:justify-between md:justify-normal md:gap-x-4 lg:max-w-[550px]">
                    <div className="flex flex-col gap-y-2.5">
                        <p>Про курс</p>

                        <p className="mb-5">Навчальні програми</p>

                        <p className="text-sm">Пошта</p>

                        <Link
                            href={"mailto:corezoidtraining@gmail.com"}
                            className="text-textBlue"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            corezoidtraining@gmail.com
                        </Link>
                    </div>

                    <div className="flex flex-col">
                        <p className="mb-2.5 sm:text-end">Ми в соцмережах</p>

                        <Social className="mb-[60px] sm:mb-9" />

                        <div className="flex  sm:mr-2.5 sm:justify-end">
                            <div className="max-w-[46px] sm:max-w-[72px]">
                                <Image
                                    src={Visa}
                                    alt="visa_icon"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <Image
                                    src={Master}
                                    alt="master_icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="*:text-[12px] *:text-textBlue flex flex-col gap-y-2.5 sm:items-center md:items-baseline md:flex-row md:justify-between ">
                <Link href={"#"}>
                    © 2025. Filipp Academy. Всі права захищено.
                </Link>
                <Link href={"#"}>
                    Умови користування та Політика конфіденційності
                </Link>
            </div>
        </section>
    );
};
