"use client";

import {
    Banner,
    AuthorSupport,
    CourseProgram,
    TargetAudience,
    LearningProcess,
    LearningOptions,
    CareerDevelopment,
    FooterBanner,
    Chat,
} from "@/component";
import { useWindowWidth } from "@/hooks/useWidth";

export default function Home() {

  const width = useWindowWidth();

    return (
        <>
            <div className="cubeBg overflow-hidden">
                <Banner />

                <TargetAudience />

                <CareerDevelopment />

                <LearningProcess />

                <AuthorSupport />

                <LearningOptions />
                
                <div className="w-full bg-white "><CourseProgram /></div>
               
                <FooterBanner/>

                {width >= 640 &&<Chat/>}
                
            </div>
        </>
    );
}
