import {
    Banner,
    AuthorSupport,
    CourseProgram,
    TargetAudience,
    LearningProcess,
    LearningOptions,
    CareerDevelopment,
    FooterBanner,
} from "@/component";

export default function Home() {
    return (
        <>
            <Banner />
            <div className="cubeBg overflow-hidden">
                <TargetAudience />
                <CareerDevelopment />
                <LearningProcess />
                <AuthorSupport />
                <LearningOptions />
                
                    <div className="w-full bg-white "> <CourseProgram /></div>
               
                <FooterBanner/>
                
            </div>
        </>
    );
}
